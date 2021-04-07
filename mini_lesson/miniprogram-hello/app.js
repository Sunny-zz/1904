// app.js
// app.json 是小程序的全局配置文件
// 主要配置项
// 1. pages   配置小程序的页面
// 2. window  用于设置所有小程序页面的状态栏、导航条、标题、窗口背景色。
// 3. tabBar 
// 4. usingComponents
// 5. permission

// 获取用户信息的流程 
// 1. 用户首次进入小程序的时候 需要在我的页面点击登录按钮， 使用 wx.getUserProfile 获取用户信息，
// 这个用户信息，授权一次就不需要在授权了，所以要存储用户信息 存储方式1. 数据缓存  2. 云数据库
// 将获取到的用户信息缓存到本地，并且添加到 app 的 globalData 内

// 2. 用户刷新或者重新打开小程序的时候，因为首次已经授权了，所以不需要再次授权。只需要从缓存中去信息即可，所以在 app.js 的 onLaunch 生命周期中获取缓存，更新 globalData， 整个小程序就可以获取用户信息了

App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 从数据缓存中获取用户的信息
    if (!this.globalData.userInfo) {
      // globalData 没有用户信息的时候，去缓存中取
      wx.getStorage({
        key: 'userInfo',
        success: (res) => {
          // 如果获取到了 userInfo 的缓存才能修改 globalData.userInfo
          console.log('获取到了 userInfo 的缓存')
          this.globalData.userInfo = JSON.parse(res.data)
        }
      })
    }
  },
  onShow() {

  },
  onHide() {

  },
  // 小程序的全局数据，所有页面都可以访问到，也可以修改
  globalData: {
    userInfo: null
  }
})
