import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

//  new Vue 创建一个 vue 实例 其实就是一个  vue 组件，这个组件是根组件 ，是属于 vue 内所有组件的祖先，也就是其他组件(App Home About)都会继承该组件

//new Vue 传递的参数其实可以使用组件 this.$options 获取
new Vue({
  router,
  // 给组件添加 一些路由属性
  render: h => h(App)
}).$mount("#app");
