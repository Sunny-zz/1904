import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// 当你导入文件的时候如果之写路径不写文件名，默认会导入当前路径下的 index.js

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
