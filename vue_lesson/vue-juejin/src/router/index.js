import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Pins from "../views/Pins.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/pins",
    name: "Pins",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 在这导入 about 组件的好处是只有在路由匹配到当前的时候才会导入 About 组件
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue")
    component: Pins
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
