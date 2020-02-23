App({
  // 初始化完成，执行生命周期函数，后台存活两小时
  onLaunch: function () {
    // console.log('初始化完成')
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // console.log('初始化')
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            // 异步调用
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              // console.log(res)
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },

  // 界面显示出来之后会调用
  onShow: function(options) {
    // console.log('界面显示完成')

    // var err = new Error()
    // throw err 
  },

  // 界面被隐藏时会调用
  onHide: function() {
    // console.log('界面被隐藏')
  },

  // 发生错误的时候执行
  onError: function() {
    // console.log('发生了错误')
  },

  //定义全局数据
  globalData: {
    userInfo: null,
    name: 'zx'
  }

})