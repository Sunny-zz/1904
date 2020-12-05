import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Topic from "../views/Topic.vue";
import User from "../views/User.vue";
import MoreTopic from "../views/MoreTopic.vue";
import Messages from "../views/Messages.vue";
import NotFound from "../views/NotFound.vue";
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
  },
  {
    // 动态路由
    // :username 动态路由参数
    path: "/user/:username",
    name: "User",
    component: User
  },
  {
    path: "/user/:username/topics",
    name: "MoreTopic",
    component: MoreTopic
  },
  {
    path: "/my/messages",
    name: "Messages",
    component: Messages
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
