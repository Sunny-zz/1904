import Vue from 'vue'
import App from './App.vue'
// 导入全局指令
import './directives'
// 导入全局过滤器
import './filters'
import UseDemo from './components/UseDemo.vue'
import './plugins/title'
Vue.config.productionTip = false

// vue 的插件功能 , 其实就是给组件添加全局功能
// 1. 使用 Vue.prototype 向 vue 的实例内添加属性或方法
Vue.prototype.$http = 'axios'
// 2. 通过 Vue.use 方法   Vue.use(MyPlugin)     MyPlugin 到底指的是什么

const MyPlugin = {
  install: function (Vue, a, b, c) {
    Vue.prototype.$xx = '测试'
    // 将 UseDemo 组件注册成全局组件，标签名是 UseDemo
    Vue.component('UseDemo', UseDemo)
    console.log(a, b, c);

  }
}
Vue.use(MyPlugin, 1, 2, 3)

// Vue.use(MyPlugin) 会自动执行 MyPlugin 内的 install 方法,use 方法会自动检测全局的你的插件是否注册没注册
new Vue({
  render: h => h(App),
}).$mount('#app')


