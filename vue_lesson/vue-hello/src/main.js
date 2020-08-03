import Vue from "vue";
// 导入 Vue
import App from "./App.vue";
// 导入 最大组件 app
import "./assets/style.css";
// 导入全局的 css
Vue.config.productionTip = false;
// Vue 项目的配置去掉生产版本提示
// 现在是开发阶段，看不到打包之后的代码，打包之后的代码被托管到服务器上，所以我们可以通过访问服务器地址访问我们的项目
new Vue({
  render: h => h(App)
}).$mount("#app");

// 创建 vue 实例 添加render配置，作用是需要渲染的的组件
// 实例创建好之后使用实例的 $mount 方法将实例挂载到页面的 #app 结构内
