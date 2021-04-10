// pages/note/note.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    content: '',
    btnTxt: '添加'
  },
  // 输入框事件
  handleInput(e) {
    const input = e.currentTarget.dataset.input
    // console.log(e)
    this.setData({
      [input]: e.detail.value
    })
  },
  // 添加事件
  handleBtn() {

    const { title, content, btnTxt } = this.data
    // console.log(title, content)
    // 展示加载中遮罩
    wx.showLoading({
      title: '加载中',
      mask: true
    });
    if (btnTxt === '添加') {
      // 调用 add 云函数新增一个便签
      wx.cloud.callFunction({
        // 云函数名称
        name: 'add',
        // 传给云函数的参数
        data: {
          title,
          content
        },
        success: function (res) {
          // console.log(res.result)
          if (res.result.message === '添加成功') {
            wx.navigateTo({
              url: '/pages/index/index'
            });
            // 关闭遮罩
            wx.hideLoading();
          }
        },
        fail: console.error
      })
    } else {
      // 更新数据库中的具体信息，在这也不使用云函数修改了
      // 直接使用
      const db = wx.cloud.database({
        // 这个是环境 id 点击与开发里面的设置可以看到
        env: 'bianqian-9g3m5sjb15a1d9fd'
      })
      db.collection('list').doc(this._id).update({
        data: {
          title, content
        }
      }).then(res => {
        // console.log(res)
        wx.navigateTo({
          url: '/pages/index/index'
        });
        wx.hideLoading()
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  // 因为添加和修改编辑都是一套页面所以在跳转的时候，地址栏加上了 type 参数，type 参数在 页面的生命周期 onLoad 里面的第一个参数可以获取到

  onLoad: async function (options) {
    // console.log(options)
    // 当点击每一个小便签跳转到 note 页面的时候，options 就可以获取到对应的 _id ，根据 _id 去获取后台的相关信息展示到页面上
    // 这个获取数据的方式就不使用云函数了，因为不需要 openid 
    if (options._id) {
      // 将 _id 保存，点击提交的时候需要使用
      this._id = options._id
      this.setData({
        btnTxt: '提交'
      })
      wx.showLoading({
        title: '加载中',
        mask: true
      });
      const db = wx.cloud.database({
        // 这个是环境 id 点击与开发里面的设置可以看到
        env: 'bianqian-9g3m5sjb15a1d9fd'
      })
      // console.log(db)
      const res = await db.collection('list').doc(options._id).get()
      this.setData({
        title: res.data.title,
        content: res.data.content
      })
      wx.hideLoading()
    }

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