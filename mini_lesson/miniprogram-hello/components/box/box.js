// components/box/box.js
Component({
  /**
   * 组件的属性列表
   */
  // 父组件传递的属性
  properties: {
    text: { // 属性名
      type: String,
      value: 'box自己的文字'
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    active: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeColor(){
      this.setData({
        active: !this.data.active
      })
    }
  }
})
