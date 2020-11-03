import Vue from 'vue'
// 全局注册一个 mixin ，所有的组件自动合并该 minxin  慎用
// Vue.mixin({
//   created: function () {
//     console.log('全局的混入');
//   }
// })

// 注册一个全局自定义指令 `v-focus`

Vue.directive('focus', {
  // directive 方法的第二个参数会接受一个对象，对象内有一些钩子函数，用来设置指令的功能，钩子函数会在特定的情况下自动触发
  // 常用的两个钩子函数 
  // 1. bind 指令绑定到元素上自动触发，而且只触发一次，此钩子函数执行的时候，原生 dom 节点还没有显示在页面中
  // 2. inserted 当被绑定的元素插入到 DOM 中时

  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el, binding) {
    // console.log(el);
    // console.log(binding);
    // 聚焦元素
    if (binding.value) {
      el.focus()
    }
  }
})

// 自定制一个点击事件指令，然后给指令设置一个修饰符 once 时间只能触发一次
// v-my-click 

Vue.directive('my-click', {
  inserted (el, binding) {
    // let count = 0
    // if (binding.value) el.onclick = function () {
    //   count++
    //   if (binding.modifiers.once) {
    //     if (count < 2) {
    //       binding.value()
    //     }
    //   } else {
    //     binding.value()
    //   }
    // }
    // 设置了 once 修饰符之后，点击一次之后解除事件绑定
    const fun = function () {
      binding.value()
      if (binding.modifiers.once) {
        // 解除事件绑定只能解除 addEventListener 添加的事件
        el.removeEventListener('click', fun)
      }
    }
    if (binding.value) el.addEventListener("click", fun);
  }
})