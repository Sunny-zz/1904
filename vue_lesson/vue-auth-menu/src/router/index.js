import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";

Vue.use(Router);
export const authRoutes = [
  // 权限路由
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/Cart.vue"),
    children: [
      {
        path: "cart-list",
        name: "cart-list",
        component: () => import("../views/CartList.vue"),
        children: [
          {
            path: "lottery",
            name: "lottery",
            component: () => import("../views/Lottery.vue")
          },
          {
            path: "product",
            name: "product",
            component: () => import("../views/Product.vue")
          }
        ]
      }
    ]
  }
];
export default new Router({
  // 默认导出 首页和404页面
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "*",
      component: {
        render: h => h("h1", {}, "Not Found")
      }
    }
  ]
});
