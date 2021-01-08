/// <reference path="./types/index.d.ts" />

interface IAppOption {
  globalData: {
    request?:Function,
    newYuan_Url?:string
    ipx?:boolean,
    navHeight?:number,
    navTop?:number,
    windowHeight?:number,
    statusBarHeight?:number
  }
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}