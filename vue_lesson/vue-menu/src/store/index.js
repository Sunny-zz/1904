import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
// 导入默认的和命名的
import router, { authRoutes, routes } from "../router";

Vue.use(Vuex);

axios.defaults.baseURL = "http://localhost:3000";
// axios 的拦截器
// 响应拦截器
axios.interceptors.response.use(res => {
  // 对响应数据做点什么
  // axios 就会以这个函数的返回值作为响应的结果
  return res.data;
});

export const getTree = list => {
  const menuTree = [];
  // 因为在 getTree 方法内对 menuList 做了循环，所以可以借助 getTree 函数直接创建 auths ，但是 getTree 就是会得到两个数据，那么需要返回对象，使用的时候也要注意。
  const auths = [];
  list.forEach(item => {
    auths.push(item.auth);
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
  return { menuTree, auths };
};

export const getRoutes = (routes, auths) => {
  return routes.filter(route => {
    // const route = { ...e };
    if (auths.includes(route.name)) {
      if (route.children) {
        // 再次筛选  递归   getRoutes 的返回值就是二次筛选的结果，我们要将筛选的结果放到第一层的 route.children 上
        // 第一层的返回值就是我们想要的结果
        route.children = getRoutes(route.children, auths);
      }
      return true;
    }
  });
};
export default new Vuex.Store({
  state: {
    menuTree: [],
    isLogin: false,
    btns: ["edit", "delete"]
  },
  mutations: {
    getMenu(state, menus) {
      state.menuTree = menus;
    },
    setLogin(state) {
      state.isLogin = true;
    }
  },
  actions: {
    async getMenu({ commit }, text) {
      // console.log(text);
      // console.log("1111");

      const { menuList } = await axios.post("/menus", { text });
      // console.log(menuList);

      const { menuTree, auths } = getTree(menuList);
      commit("getMenu", menuTree);
      commit("setLogin");
      sessionStorage.setItem("tree", JSON.stringify(menuTree));
      sessionStorage.setItem("auths", JSON.stringify(auths));

      // 用户登录成功 需要存储登录状态
      // 因为刷新的时候所有用户数据都重置了   需要重新获取
      // 1. 将数据直接存储到本地 storage
      // 2. 一般用户登录成功后台会返回一个 token(用户的身份标识) ，将 token 存储到 本地浏览器

      // console.log("222222222");

      // 在这还要更新一个项目的路由
      // 思考 该如何处理 authRoutes
      routes[1].children.push(...getRoutes(authRoutes, auths));
      // console.log(routes[1], getRoutes(authRoutes, auths));
      router.addRoutes([routes[1]]);
    }
  },
  modules: {}
});

// const list1 = [
//   { pid: -1, name: "购物车", id: 1, auth: "cart" },
//   { pid: 1, name: "购物车列表", id: 4, auth: "cartlist" },
//   { pid: -1, name: "商店", id: 2, auth: "store" }
// ];
// const auths = list1.map(e => e.auth);
// //  用户的所有权限   auths  ['cart','cartlist','store','me']

// const getRoutes = routes => {
//   return routes.filter(e => {
//     const route = { ...e };
//     if (auths.includes(route.name)) {
//       if (route.children) {
//         // 再次筛选  递归   getRoutes 的返回值就是二次筛选的结果，我们要将筛选的结果放到第一层的 route.children 上
//         // 第一层的返回值就是我们想要的结果
//         route.children = getRoutes(route.children);
//       }
//       return true;
//     }
//   });
// };
// // console.log(authRoutes);

// console.log(getRoutes(authRoutes));
