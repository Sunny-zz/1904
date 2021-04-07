// pages/me/me.js

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
    // 展示信息
    obj: null
  },
  onLoad() {
    // 当进入页面的时候看 全局的 data 里面有没有用户信息，有的话更新该页面的用户信息
    // console.log(app.globalData)
    if (app.globalData.userInfo) {
      // 防止首次进入小程序的时候做没有用的修改了
      this.setData({
        userInfo: app.globalData.userInfo
      })
    }
    wx.request({
      // 小程序的请求地址必须要去小程序的后台添加 request 合法域名,然后才能请求
      url: 'https://zhuanlan.zhihu.com/api/columns/zhihuadmin', //仅为示例，并非真实的接口地址
      method: 'GET',
      // data: {

      // },
      // header: {},
      success: (res) => {
        console.log(res.data)
        this.setData({
          obj: res.data
        })
      },
      fail: err => {
        console.log(err)
      }
    })
  },
  login() {
    // 获取用户信息的接口只能点击事件触发，写在生命周期不弹出授权弹窗
    // console.log(app)
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo
        })
        // 将获取到的 userInfo 存储到全局, 在不关闭小程序的前提下整个的小程序内可以访问 globalData 获取用户信息
        app.globalData.userInfo = res.userInfo
        // 将获取到的用户信息使用数据缓存存储，目的是当小程序刷新的时候，globalData 被重置了，需要从数据缓存中获取存好的用户信息
        wx.setStorage({
          key: "userInfo",
          data: JSON.stringify(res.userInfo)
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  // onLoad: function (options) {

  // },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  // onReady: function () {

  // },

  /**
   * 生命周期函数--监听页面显示
   */
  // onShow: function () {

  // },

  /**
   * 生命周期函数--监听页面隐藏
   */
  // onHide: function () {

  // },

  /**
   * 生命周期函数--监听页面卸载
   */
  // onUnload: function () {

  // },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  // onPullDownRefresh: function () {

  // },

  /**
   * 页面上拉触底事件的处理函数
   */
  // onReachBottom: function () {

  // },

  /**
   * 用户点击右上角分享
   */
  // onShareAppMessage: function () {

  // }
})