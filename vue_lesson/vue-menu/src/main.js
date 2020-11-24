import Vue from "vue";
import App from "./App.vue";
import router, { authRoutes } from "./router";
import store, { getRoutes } from "./store";
import "./plugins/element.js";

Vue.config.productionTip = false;

// 只是刷新页面的时候需要做的
if (!store.state.isLogin) {
  const tree = sessionStorage.getItem("tree");
  if (tree) {
    // 更新 vuex
    // console.log("更新  vuex");
    store.commit("setLogin");
    store.commit("getMenu", JSON.parse(tree));
    const auths = JSON.parse(sessionStorage.getItem("auths"));
    router.options.routes[1].children.push(...getRoutes(authRoutes, auths));
    router.addRoutes([router.options.routes[1]]);
    // console.log(router);
  }
}

router.beforeEach((to, from, next) => {
  // console.log("守卫");
  // console.log(to);
  // console.log(from);
  if (to.path !== "/login" && !store.state.isLogin) {
    // console.log("不通过 去 login");
    next("/login");
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
