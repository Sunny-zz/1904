import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

// 可以使用路由导航守卫都路由进行控制
// 1. 全局守卫
//    a.全局前置守卫   在所有路由跳转之前执行的钩子

const login = false;
router.beforeEach((to, from, next) => {
  // to 当前的路由
  console.log(to);
  // from 是原来的路由
  console.log(from);
  if (to.path === "/") {
    next();
  } else {
    if (login) {
      next();
    } else {
      alert("未登录，请先登录");
      next("/");
    }
  }
  // next 参数是一个函数 该函数的作用就是 通行
});
export default router;
