// 该文件是用户引入我自己创建的 mini-router ，进行各种配置
import Vue from "vue";
// import VueRouter from "vue-router";
import VueRouter from "../mini-router.js";
import Home from "../views/Home.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);
// Vue.use 就是执行了  VueRouter 的 install 方法

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
  {
    path: "/about",
    name: "About",
    component: About
  }
];

const router = new VueRouter({
  mode: "hash",
  routes
});

export default router;
