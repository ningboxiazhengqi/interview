"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tips = {
    '6': '请求参数出问题！',
    '3': '要完成请求，需要进一步操作,可能存在',
    '4': '请求可能出错，对接服务失败',
    '5': '服务器在处理请求时发生内部错误',
    '7': '请求超时，请重新刷新'
};
var WXrequest = function (url, data, method) {
    if (method === void 0) { method = 'POST'; }
    var time = 5000;
    url = 'https://p.utbon.com:8080' + url;
    var promise = new Promise(function (resolve, reject) {
        wx.request({
            url: url,
            data: data,
            timeout: time,
            method: method,
            success: function (res) {
                var code = res.statusCode.toString();
                var code_status = code.slice(0, 1);
                if (code.startsWith('2')) {
                    if (res.data.result) {
                        if (res.data.result != 'success') {
                            show_error('6');
                            resolve(false);
                        }
                        else {
                            resolve(res);
                        }
                    }
                    else {
                        resolve(true);
                    }
                }
                else {
                    resolve(false);
                    show_error(code_status);
                }
            },
            fail: function (res) {
                try {
                    var code = res.statusCode.toString();
                    var code_status = code.slice(0, 1);
                    show_error(code_status);
                }
                catch (error) {
                    show_error('7');
                }
                reject(res);
            }
        });
    });
    return promise;
};
var show_error = function (code_status) {
    wx.showToast({
        title: tips[code_status],
        icon: 'none',
        duration: 2000
    });
};
exports.default = WXrequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQU0sSUFBSSxHQUFVO0lBQ2xCLEdBQUcsRUFBQyxVQUFVO0lBQ2QsR0FBRyxFQUFDLG9CQUFvQjtJQUN4QixHQUFHLEVBQUMsZUFBZTtJQUNuQixHQUFHLEVBQUMsaUJBQWlCO0lBQ3JCLEdBQUcsRUFBQyxZQUFZO0NBQ2pCLENBQUE7QUFFRCxJQUFNLFNBQVMsR0FBRyxVQUFDLEdBQVUsRUFBRSxJQUFXLEVBQUMsTUFBbUI7SUFBbkIsdUJBQUEsRUFBQSxlQUFtQjtJQUM1RCxJQUFJLElBQUksR0FBVSxJQUFJLENBQUE7SUFDdEIsR0FBRyxHQUFHLDBCQUEwQixHQUFHLEdBQUcsQ0FBQTtJQUN0QyxJQUFJLE9BQU8sR0FBSSxJQUFJLE9BQU8sQ0FBQyxVQUFVLE9BQU8sRUFBRSxNQUFNO1FBQ2xELEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDVCxHQUFHLEVBQUUsR0FBRztZQUNSLElBQUksRUFBRSxJQUFJO1lBQ1YsT0FBTyxFQUFDLElBQUk7WUFDWixNQUFNLEVBQUUsTUFBTTtZQUNkLE9BQU8sRUFBRSxVQUFTLEdBQU87Z0JBQ3ZCLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUE7Z0JBQ3BDLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNsQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ3hCLElBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUM7d0JBQ2pCLElBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksU0FBUyxFQUFDOzRCQUM5QixVQUFVLENBQUMsR0FBRyxDQUFDLENBQUE7NEJBQ2YsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO3lCQUNmOzZCQUFJOzRCQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTt5QkFDYjtxQkFDRjt5QkFBSTt3QkFFSCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7cUJBQ2Q7aUJBRUY7cUJBQU07b0JBRUwsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO29CQUNkLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQTtpQkFDeEI7WUFFSCxDQUFDO1lBQ0QsSUFBSSxFQUFFLFVBQVMsR0FBTztnQkFDcEIsSUFBSTtvQkFDRixJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFBO29CQUNwQyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztvQkFDbEMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFBO2lCQUN4QjtnQkFBQyxPQUFPLEtBQUssRUFBRTtvQkFDZCxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUE7aUJBQ2hCO2dCQUNELE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUViLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUMsQ0FBQTtBQUdELElBQU0sVUFBVSxHQUFHLFVBQUMsV0FBa0I7SUFDcEMsRUFBRSxDQUFDLFNBQVMsQ0FBQztRQUNULEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3hCLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDakIsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBO0FBR0Qsa0JBQWUsU0FBUyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdGlwczpvYmplY3QgPSB7XHJcbiAgJzYnOifor7fmsYLlj4LmlbDlh7rpl67popjvvIEnLFxyXG4gICczJzon6KaB5a6M5oiQ6K+35rGC77yM6ZyA6KaB6L+b5LiA5q2l5pON5L2cLOWPr+iDveWtmOWcqCcsXHJcbiAgJzQnOifor7fmsYLlj6/og73lh7rplJnvvIzlr7nmjqXmnI3liqHlpLHotKUnLFxyXG4gICc1Jzon5pyN5Yqh5Zmo5Zyo5aSE55CG6K+35rGC5pe25Y+R55Sf5YaF6YOo6ZSZ6K+vJyxcclxuICAnNyc6J+ivt+axgui2heaXtu+8jOivt+mHjeaWsOWIt+aWsCdcclxufVxyXG4vL+aWsOeahOaOpeWPo+WwgeijheWHveaVsFxyXG5jb25zdCBXWHJlcXVlc3QgPSAodXJsOnN0cmluZywgZGF0YTpvYmplY3QsbWV0aG9kOmFueSA9ICdQT1NUJykgPT4ge1xyXG4gIGxldCB0aW1lOm51bWJlciA9IDUwMDBcclxuICB1cmwgPSAnaHR0cHM6Ly9wLnV0Ym9uLmNvbTo4MDgwJyArIHVybFxyXG4gIHZhciBwcm9taXNlID0gIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpICB7XHJcbiAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiB1cmwsXHJcbiAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgIHRpbWVvdXQ6dGltZSxcclxuICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlczphbnkpe1xyXG4gICAgICAgIGxldCBjb2RlID0gcmVzLnN0YXR1c0NvZGUudG9TdHJpbmcoKVxyXG4gICAgICAgIGxldCBjb2RlX3N0YXR1cyA9IGNvZGUuc2xpY2UoMCwxKTtcclxuICAgICAgICBpZiAoY29kZS5zdGFydHNXaXRoKCcyJykpIHtcclxuICAgICAgICAgIGlmKHJlcy5kYXRhLnJlc3VsdCl7XHJcbiAgICAgICAgICAgIGlmKHJlcy5kYXRhLnJlc3VsdCAhPSAnc3VjY2Vzcycpe1xyXG4gICAgICAgICAgICAgIHNob3dfZXJyb3IoJzYnKVxyXG4gICAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgIHJlc29sdmUocmVzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgLy/msqHmnInku7vkvZXov5Tlm55cclxuICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coY29kZSlcclxuICAgICAgICAgIHJlc29sdmUoZmFsc2UpXHJcbiAgICAgICAgICBzaG93X2Vycm9yKGNvZGVfc3RhdHVzKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlczphbnkpe1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBsZXQgY29kZSA9IHJlcy5zdGF0dXNDb2RlLnRvU3RyaW5nKClcclxuICAgICAgICAgIGxldCBjb2RlX3N0YXR1cyA9IGNvZGUuc2xpY2UoMCwxKTtcclxuICAgICAgICAgIHNob3dfZXJyb3IoY29kZV9zdGF0dXMpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIHNob3dfZXJyb3IoJzcnKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZWplY3QocmVzKVxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0pO1xyXG4gIHJldHVybiBwcm9taXNlO1xyXG59XHJcblxyXG4vL+aKpemUmeaPkOekulxyXG5jb25zdCBzaG93X2Vycm9yID0gKGNvZGVfc3RhdHVzOnN0cmluZykgPT4ge1xyXG4gIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgIHRpdGxlOiB0aXBzW2NvZGVfc3RhdHVzXSxcclxuICAgICAgaWNvbjogJ25vbmUnLFxyXG4gICAgICBkdXJhdGlvbjogMjAwMFxyXG4gIH0pXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBXWHJlcXVlc3RcclxuXHJcbiJdfQ==