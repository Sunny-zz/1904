import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/element.js";
import store from "./store";

router.beforeEach(async (to, from, next) => {
  if (!store.state.hasPermission) {
    // 获取最新路由列表
    let newRoutes = await store.dispatch("getRouteList");
    router.addRoutes(newRoutes); // 增加新路由
    next({ ...to });
  } else {
    next(); // 获取过就不需要再次获取了
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
