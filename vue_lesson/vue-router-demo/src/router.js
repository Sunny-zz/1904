// 路由文件

// 一 。创建页面路由

// 1. 导入页面组件
import VueRouter from "vue-router";
import Vue from "vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Company from "./views/Company.vue";

// 因为路由创建完毕之后视需要使用一些 vue-router 内的自带组件展示和跳转页面，所以需要时用 use 方法
// use 方法使用了之后， vue-router 内的自带组件就可以在整个 vue 项目中使用了
Vue.use(VueRouter);
// 2. 根据页面组件创建路由数组
const routes = [
  // 该数组内的某一项就相当于一个页面，页面一般有两部分构成 1. 页面地址  2.页面对应的页面组件
  // / 的意思代表当前服务器的根目录 我们现在其实就是 http://localhost:8000
  // http://localhost:8000/#/
  // http://localhost:8000/#/about
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/company", component: Company }
];

// 3. 根据路由数组创建出路由实例
// 创建实例的时候需要传递 routes 属性，属性值是路由数组
// 创建路由实例的时候是可以选择路由模式的
// 路由模式分为两种 1. hash 使用 URL 的 hash  默认的   2. history 完全模拟浏览器  需要设置
// 可以使用 mode 设置路由模式
const router = new VueRouter({
  routes,
  mode: "history"
});

// 4. 创建完毕之后,导出路由实例,添加到整个 vue 项目中. 参考 main.js 的写法
export default router;

// 二 。 使用路由
// 在组件内部使用 <router-view> 就可以展示路由了
