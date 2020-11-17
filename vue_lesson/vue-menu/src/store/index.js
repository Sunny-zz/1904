import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

axios.defaults.baseURL = "http://localhost:3000";
// axios 的拦截器
// 响应拦截器
axios.interceptors.response.use(res => {
  // 对响应数据做点什么
  // axios 就会以这个函数的返回值作为响应的结果
  return res.data;
});

const getTree = list => {
  const menuTree = [];
  list.forEach(item => {
    if (item.pid === -1) {
      // pid 为 -1 的话是根节点
      menuTree.push(item);
    } else {
      // pid 不为 -1
      // if (list.find((e) => e.id === item.pid)) {
      //   if (list.find((e) => e.id === item.pid).children) {
      //     list.find((e) => e.id === item.pid).children.push(item)
      //   } else {
      //     list.find((e) => e.id === item.pid).children = [item]
      //   }
      // }
      const o = list.find(e => e.id === item.pid);
      // 在原数组内找到 id 跟当前 pid 相同的对象
      if (o.children) {
        o.children.push(item);
      } else {
        o.children = [item];
      }
    }
  });
  return menuTree;
};
export default new Vuex.Store({
  state: {
    menuTree: []
  },
  mutations: {
    getMenu(state, menus) {
      state.menuTree = menus;
    }
  },
  actions: {
    async getMenu({ commit }) {
      const { menuList } = await axios.get("/menus");
      commit("getMenu", getTree(menuList));
    }
  },
  modules: {}
});
