import Vue from 'vue'
import App from './App.vue'
new Vue({
  // 创建 vue 的实例化对象的时候必须传递一个 render 函数，而且该函数必须返回一个 dom 节点或者 VNode 节点
  // 可以使用 h 参数创建一个 VNode 节点  
  // render: h => h('h1',{},'heo')
  render: h => h(App)
}).$mount('#app')



