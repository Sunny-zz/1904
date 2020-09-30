import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
// 将 element 相关的代码全部写到了 plugins/element.js 内
import "./plugins/element.js";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
