
// 创建函数式组件
// 1. Vue.component 方法创建函数组件，这种创建出来的组件是全局组件
// 2. 直接在 js 文件内写一个对象，对象内包含一个 render 方法即可，render 方法必须返回 html 节点
const Title = {
  install: function (Vue) {
    Vue.component('Title', {
      render: function (createElement) {
        // createElement 就是创建虚拟 dom 节点的方法
        // createElement
        // 也有的资料用 h 表示 createElement
        // return createElement(
        //   // 标签名称
        //   `h${this.level}`,
        //   // 标签内部的文字
        //   this.$slots.default
        // )
        return createElement(
          // 标签名称
          `h${this.level}`,
          // 标签内部的文字
          // this.$slots.default
          [
            createElement('a', {
              attrs: {
                href: '#'
              }
            }, this.$slots.default),
            createElement('span', {
              on: {
                click: this.test
              }
            }, this.$slots.default)
          ]
        )
      },
      // 在 component 方法传递的第二个参数对象内添加
      //  data  props methods ... 就相当于给组件创建对应的属性
      // render 方法就是用来创建 vnode 的，也就是虚拟 dom 节点，也可以说是 vue 组件的 html 标签
      props: {
        level: {
          type: Number,
          default: 1
        }
      },
      methods: {
        test () {
          console.log('测试事件');
        }
      }
    })
  }
}
export default Title