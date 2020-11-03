import Vue from 'vue'
import App from './App.vue'
// 导入全局指令
import './directives'
// 导入全局过滤器
import './filters'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


