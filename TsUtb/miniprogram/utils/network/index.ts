const tips:object = {
  '6':'请求参数出问题！',
  '3':'要完成请求，需要进一步操作,可能存在',
  '4':'请求可能出错，对接服务失败',
  '5':'服务器在处理请求时发生内部错误',
  '7':'请求超时，请重新刷新'
}
//新的接口封装函数
const WXrequest = (url:string, data:object,method:any = 'POST') => {
  let time:number = 5000
  url = 'https://p.utbon.com:8080' + url
  var promise =  new Promise(function (resolve, reject)  {
    wx.request({
      url: url,
      data: data,
      timeout:time,
      method: method,
      success: function(res:any){
        let code = res.statusCode.toString()
        let code_status = code.slice(0,1);
        if (code.startsWith('2')) {
          if(res.data.result){
            if(res.data.result != 'success'){
              show_error('6')
              resolve(false)
            }else{
              resolve(res)
            }
          }else{
            //没有任何返回
            resolve(true)
          }
          
        } else {
          //console.log(code)
          resolve(false)
          show_error(code_status)
        }

      },
      fail: function(res:any){
        try {
          let code = res.statusCode.toString()
          let code_status = code.slice(0,1);
          show_error(code_status)
        } catch (error) {
          show_error('7')
        }
        reject(res)
        
      }
    })
  });
  return promise;
}

//报错提示
const show_error = (code_status:string) => {
  wx.showToast({
      title: tips[code_status],
      icon: 'none',
      duration: 2000
  })
}


export default WXrequest

