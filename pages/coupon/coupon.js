const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeClick: 1,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo: {},
    hasUserInfo: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const _this = this
    //获取信息
    // wx.getUserInfo({
    //   success(res) {
    //     const userInfo = res.userInfo
    //     const nickName = userInfo.nickName
    //     const avatarUrl = userInfo.avatarUrl
    //     _this.setData({
    //       userInfo: userInfo,
    //       nickName: nickName,
    //       avatarUrl: avatarUrl
    //     })
    //     // 登录
    //     wx.login({
    //       success: result => {
    //         // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //         // 也就是发送到后端,后端通过接口发送到前端，前端接收用户信息等....
    //         console.log(result.code)
    //         wx.request({
    //           url: 'https://aileer.net/account/login',
    //           data: {
    //             code: result.code,
    //             name: _this.data.nickName,
    //             avatarUrl: _this.data.avatarUrl
    //           },
    //           method: 'POST',
    //           success: function (re) {
    //             console.log(re)
    //           }

    //         })


    //       }
    //     })
    //   }
    // })
    // console.log(wx.canIUse('button.open-type'))
    // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       console.log('1111')
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           const userInfo = res.userInfo
    //           wx.setStorageSync('userInfo', userInfo);
    //           // 登录
    //           wx.login({
    //             success: result => {
    //               // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //               // 也就是发送到后端,后端通过接口发送到前端，前端接收用户信息等....
    //               console.log(result.code)
    //               wx.request({
    //                 url: 'https://aileer.net/account/login',
    //                 data: {
    //                   code: result.code,
    //                   name: userInfo.nickName,
    //                   avatarUrl: userInfo.avatarUrl
    //                 },
    //                 method: 'POST',
    //                 success: function (re) {
    //                   console.log(re)
    //                 }

    //               })
    //             }
    //           })

    //         }
    //       })

    //     }

    //   }
    // })
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // }
    // } else if (this.data.canIUse) {
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
    // 登录
    wx.login({
      success: result => {
        var codes = result.code
        wx.getSetting({
          success: res => {
            if (res.authSetting['scope.userInfo']) {
              _this.setData({
                hasUserInfo: true
              })
              wx.getUserInfo({
                success: res => {
                  const userInfo = res.userInfo
                  wx.setStorageSync('userInfo', userInfo)
                  // 获取登录状态
                  wx.request({
                    url: 'https://aileer.net/account/login',
                    data: {
                      code: result.code,
                      name: userInfo.nickName,
                      avatarUrl: userInfo.avatarUrl
                    },
                    method: 'POST',
                    success: function (res) {
                      console.log(res)
                    }
                  })
                }
              })
            }
          }
        })
        
      }
    })
  },
  bindGetUserInfo(e) {
    console.log(e.detail.userInfo)
  },
  // tab切换函数
  ontabClick: function(e) {
    const _this = this
    var tagid = e.currentTarget.dataset.type
    if (tagid === 1) {
      _this.setData({
        activeClick: tagid
      })
    } else {
      _this.setData({
        activeClick: tagid
      })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    const _this = this
   
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})