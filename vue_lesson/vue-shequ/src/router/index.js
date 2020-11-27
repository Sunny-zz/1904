import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Topic from "../views/Topic.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  // /topic/xakjsgquv66etyr128tu    /topic/xakjsgquv768765128tu
  //
  {
    path: "/topic/:id",
    name: "Topic",
    component: Topic
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
