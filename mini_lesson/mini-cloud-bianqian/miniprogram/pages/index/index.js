// miniprogram/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    notes: []
  },
  // 点击单个 note 跳转到 note 详情页，其实也就是编辑页,跳转页面的时候需要知道当前 note 的 _id 方便和后台数据库做修改。
  noteClick(e){
    wx.navigateTo({
      url: `/pages/note/note?_id=${e.currentTarget.dataset.id}`
    });
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  // 当进入 首页的时候需要向小程序数据库发送请求获取该用户的便签列表，也是直接使用云函数和数据库交互即可，因为云函数内可以直接获取到用户的 openid
  onLoad: function (options) {
    // 展示加载中
    wx.showLoading({
      title: '加载中',
      mask: true
    });
    wx.cloud.callFunction({
      // 云函数名称
      name: 'getnote',
      success: res => {
        this.setData({
          notes: res.result.notes
        })
        // 关闭加载中
        wx.hideLoading();
      },
      fail: console.error
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})