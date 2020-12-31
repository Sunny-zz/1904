// 做 ie 兼容
import "babel-polyfill"
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element'
import './assets/index.css'

// Vue.mixin({
//   created: function () {
//     console.log('我是 vue 的全局 mixin 内添加的生命周期器输出')
//   }
// })

new Vue({
  // 创建 vue 的实例化对象的时候必须传递一个 render 函数，而且该函数必须返回一个 dom 节点或者 VNode 节点
  // 可以使用 h 参数创建一个 VNode 节点  
  // render: h => h('h1',{},'heo')
  render: h => h(App),
  router,
  store
}).$mount('#app')



