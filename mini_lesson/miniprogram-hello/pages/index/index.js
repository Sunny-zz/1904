// index.js
// 获取应用实例
const app = getApp()

//Page Object
Page({

  // 当前页面的数据 data
  // vue 中的 data | react 中的 state
  data: {
    count: 0,
    val: 0,
    show: false,
    arr: [
      {
        id: '1',
        text: '11'
      },
      {
        id: '2',
        text: '22'
      },
      {
        id: '3',
        text: '33'
      }
    ]
  },
  onLoad(){
    // console.log(app.globalData)
  },
  goAbout() {
    // 不使用导航组件实现页面的跳转
    // wx.navigateTo({
    //   // url 要写路径实现跳转
    //   url: '../about/about',
    // })
    wx.switchTab({
      // url 要写路径实现跳转
      url: '../about/about',
    })
  },
  // 在 Page 对象下新增方法就是可以当做事件函数
  // 事件函数内如果想要使用 this 的话必须定义成 普通函数， this 指向的是整个页面
  add() {
    // console.log(this)
    this.setData({
      count: this.data.count + 1
    }, () => {
      // console.log('更新完毕的回调')
      // console.log(this.data.count)
    })
  },
  sub() {
    this.setData({
      count: this.data.count - 1
    }, () => {
      // console.log('更新完毕的回调')
      // console.log(this.data.count)
    })
  },
  // 事件对象 event
  // detail
  // currentTarget    dataset
  // touches
  // timeStamp

  // 事件冒泡
  // 阻止使用 catch 绑定事件
  change(e) {
    // 通过事件对象获取输入框中的内容
    // e.detail  获取输入的内容
    // console.log(typeof e.detail.value)
    this.setData({
      val: Number(e.detail.value)
    })
  },
  changeCount() {
    console.log('点击事件触发')
    this.setData({
      count: this.data.val
    })
  },
  changeCountByParams(e) {
    // 通过 e.currentTarget 的 dataset 可以获取该节点的自定义数据，从而实现事件传参
    console.log(e)
    this.setData({
      count: e.currentTarget.dataset.num
    })
  },
  changeShow() {
    this.setData({
      show: !this.data.show
    })
  },
  // data: {
  //   motto: 'Hello World',
  //   userInfo: {},
  //   hasUserInfo: false,
  //   canIUse: wx.canIUse('button.open-type.getUserInfo'),
  //   canIUseGetUserProfile: false,
  //   canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  // },
  // 事件处理函数
  // bindViewTap() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  // onLoad() {
  //   if (wx.getUserProfile) {
  //     this.setData({
  //       canIUseGetUserProfile: true
  //     })
  //   }
  // },
  // getUserProfile(e) {
  //   // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
  //   wx.getUserProfile({
  //     desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
  //     success: (res) => {
  //       console.log(res)
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   })
  // },
  // getUserInfo(e) {
  //   // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
  //   console.log(e)
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }

  // 进入 index 就获取用户信息

  // onLoad(options) {
  //   console.log(11111)
  //   wx.getUserProfile({
  //     desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
  //     success: (res) => {
  //       console.log(res)
  //     }
  //   })
  // },
})
