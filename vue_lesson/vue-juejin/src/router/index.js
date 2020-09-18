import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Pins from "../views/Pins.vue";
import PostList from "../views/PostList.vue";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  // 路由的匹配规则匹配到了一个就不匹配，而且顺序是从上到下的而且是完全匹配
  {
    path: "/feidian",
    alias: "/b",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 在这导入 about 组件的好处是只有在路由匹配到当前的时候才会导入 About 组件
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue")
    components: {
      default: Pins
    }
  },
  { path: "/pins", redirect: "/feidian" },
  {
    path: "/",

    component: Home,
    // Home 页面名需要设置子页面添加 children 属性
    // 子页面的展示也是需要使用 router-view
    children: [
      // 默认显示的子路由
      {
        path: "",
        component: PostList,
        name: "home"
      },
      {
        // 子页面的 path 属性,开头不需要加 /
        // 当一个组件当成很多个页面，那么需要将 path 设置成动态路由
        // 也就是说 很多个网址展示同一个组件
        path: ":type", // 动态路由地址 输入什么都可以匹配 但是不能匹配多层级
        // 当地址栏输入  http://localhost:8080/ios 的时候 type 就被赋值成 ios
        // 就是地址栏随便输入就可以展示 PostList 页面
        component: PostList,
        name: "postlist",
        // 当你将 props 属性设置成 true 的时候 动态路由参数就会被当作 props 传递给路由组件
        // 这样组件内就可以直接通过 props 获取动态路由参数了
        // props: true
        // props 还可以设置成函数但是需要返回一个对象，这样写的好处，该函数默认接收当前路由（就相当于组件内的 this.$route）为参数，所以我们可以将路由的相关信息当作 props 传递给组件
        props: route => ({ type: route.params.type })
      }
    ]
  },
  {
    path: "*",
    // 匹配所有地址
    component: NotFound
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
