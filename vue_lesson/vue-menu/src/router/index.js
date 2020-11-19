import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";
import Cart from "../views/Cart.vue";
import Store from "../views/Store.vue";
import Me from "../views/Me.vue";
import CartList from "../views/CartList.vue";
import Lottery from "../views/Lottery.vue";
import Goods from "../views/Goods.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

// 可能需要动态添加的路由(页面)
// 这个  authRoutes  是所有的权限页面组成的数组
// 根据用户的权限 对这个路由进行删减，然后在使用 动态添加路由的方法 给 vuerouter加上一些路由
// 路由实例下的一个 addRoutes 方法
// 该路由s 需要先跟后台交流一下，到底总共有多少页面，页面之间的关系什么样，然后创建
export const authRoutes = [
  {
    path: "/cart",
    name: "cart",
    // component: () => import("../views/Cart.vue")
    component: Cart,
    children: [
      {
        // /cart/cartlist
        path: "cartlist",
        name: "cartlist",
        // component: () => import("../views/CartList.vue")
        component: CartList,
        children: [
          {
            path: "lottery",
            name: "lottery",
            // component: () => import("../views/Lottery.vue")
            component: Lottery
          },
          {
            path: "goods",
            name: "goods",
            // component: () => import("../views/Lottery.vue")
            component: Goods
          }
        ]
      }
    ]
  },
  {
    path: "/store",
    name: "store",
    // component: () => import("../views/Cart.vue")
    component: Store
  },
  {
    path: "/me",
    name: "me",
    // component: () => import("../views/Cart.vue")
    component: Me
  }
];

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/",
    name: "Main",
    component: Main
  },
  {
    path: "*",
    name: "notfound",
    // component: () => import("../views/Cart.vue")
    // component 可以直接使用 render 函数渲染一个组件出来
    component: {
      render: h => h("h1", {}, "Not Found")
    }
  }
];

// 写一个菜单路由  有菜单就有路由页面
// 购物车 /cart   子页面--->   购物车列表   /cart/cartlist    子路由---->    1.  /lottery    2. /goods
// 商店   /store
// 个人中心 /me
// 404 页面 地址输入错误显示 not found
// 先不需要写 link   直接在页面地址栏输入地址测试
// 1. 先实现根的三个路由  也就是  Home    store     me    效果是页面中分别输入地址  /home  |   /store   |   /me   对应出现页面
// 2. 然后去再去写子路由
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// router.addRoutes(authRoutes);
export default router;
