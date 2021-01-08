import WXrequest from './utils/network/index'

// app.ts
App<IAppOption>({
  globalData: {
    newYuan_Url: 'https://p.utbon.com:8080',
    ipx:false,
  },
  onLaunch() {
    const that = this;
    //全局请求
    this.globalData.request = WXrequest;
    wx.getSystemInfo({
      success: function(res) {
        if (res.model.match("iPhone") && res.model.match("X")) {
          that.globalData.ipx = true
        }
        //导航高度
        let menuButtonObject = wx.getMenuButtonBoundingClientRect();
        let statusBarHeight = res.statusBarHeight,
          navTop = menuButtonObject.top,
          navHeight = navTop - statusBarHeight +  navTop + menuButtonObject.height;
        that.globalData.navHeight = navHeight;
        that.globalData.navTop = navTop;
        that.globalData.windowHeight = res.windowHeight;
        that.globalData.statusBarHeight = statusBarHeight;
        //console.log(menuButtonObject)
      },
    })

  },
})