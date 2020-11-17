import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { authRoutes } from "../router";
Vue.use(Vuex);

axios.defaults.baseURL = "http://localhost:3000";
axios.interceptors.response.use(res => {
  return res.data;
});

const getMenListAndAuth = menuList => {
  let menu = [];
  let sourceMap = {};
  let auth = [];
  menuList.forEach(m => {
    m.children = []; // 增加孩子列表
    sourceMap[m.id] = m;
    auth.push(m.auth);
    if (m.pid === -1) {
      menu.push(m); // 根节点
    } else {
      sourceMap[m.pid] && sourceMap[m.pid].children.push(m);
    }
  });
  return { menu, auth }; // 获取菜单数据和权限数据
};

const getRoutes = auth => {
  const filter = authRoutes => {
    return authRoutes.filter(route => {
      // 包含权限
      if (auth.includes(route.name)) {
        if (route.children) {
          route.children = filter(route.children);
        }
        return true;
      }
    });
  };
  return filter(authRoutes);
};

export default new Vuex.Store({
  state: {
    hasPermission: false,
    menuList: []
  },
  mutations: {
    setMenu(state, menu) {
      state.menuList = menu;
    },
    setPermission(state) {
      state.hasPermission = true;
    }
  },
  actions: {
    async getRouteList({ commit }) {
      const { menuList } = await axios.get("/roleAuth");
      const { menu, auth } = getMenListAndAuth(menuList);
      commit("setMenu", menu); // 将菜单数据保存起来
      commit("setPermission"); // 权限获取完毕
      // 通过auth查找需要添加的路由
      return getRoutes(auth);
    }
  },
  modules: {}
});
