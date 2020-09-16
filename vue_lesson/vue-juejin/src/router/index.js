import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Pins from "../views/Pins.vue";
import PostList from "../views/PostList.vue";

Vue.use(VueRouter);

const routes = [
  // 路由的匹配规则匹配到了一个就不匹配，而且顺序是从上到下的而且是完全匹配
  {
    path: "/pins",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 在这导入 about 组件的好处是只有在路由匹配到当前的时候才会导入 About 组件
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue")
    component: Pins
  },
  {
    path: "/",
    component: Home,
    // Home 页面名需要设置子页面添加 children 属性
    // 子页面的展示也是需要使用 router-view
    children: [
      {
        // 子页面的 path 属性,开头不需要加 /
        // 当一个组件当成很多个页面，那么需要将 path 设置成动态路由
        // 也就是说 很多个网址展示同一个组件
        path: ":type", // 动态路由地址 输入什么都可以匹配 但是不能匹配多层级
        // 当地址栏输入  http://localhost:8080/ios 的时候 type 就被赋值成 ios
        // 就是地址栏随便输入就可以展示 PostList 页面
        component: PostList
      }
    ]
  }
  // 这个 PostList 组件对应的页面是 Home 页面的子页面
  // 子页面的设置要写在对应父页面的对象下的 children 属性内
  // {
  //   path: "/frontend",
  //   component: PostList
  // }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
