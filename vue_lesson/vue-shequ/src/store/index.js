import Axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import $axios from "../plugins/axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articleList: null,
    // type: "all"
    article: null,
    // 用户输入正确 token 然后，我们向后台发请求，会反馈用户信息，我们直接将用户信息 存储到 store 并且将 token 存储到本地浏览器

    // 但是我们现在的 token 登录接口失效了  ，想要获取用户信息必须使用另外一个接口 ‘https://vue-js.com/api/v1/user/sunny-zz’
    // 输入正确 token 向后发送 https://vue-js.com/api/v1/user/sunny-zz 请求
    userInfo: null,
    otherUserInfo: null
  },
  mutations: {
    getArticles(state, list) {
      state.articleList = list;
    },
    getArticle(state, article) {
      state.article = article;
    },
    getUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
    getOtherUserInfo(state, userInfo) {
      state.otherUserInfo = userInfo;
    }
  },
  actions: {
    async getArticles({ commit }, { tab, page }) {
      // const res = await $axios.get("/topics", {
      //   params: { page: 2, tab: "share" }
      // });
      // console.log(tab);
      commit("getArticles", null);

      const queryStr =
        tab && tab !== "all"
          ? `?tab=${tab}&page=${page}&limit=20`
          : `?tab=all&page=${page}&limit=20`;
      // console.log(queryStr);
      const res = await $axios.get(`/topics/${queryStr}`);
      // /api/topics  发的请求
      // 由于以的服务器设置了代理  将 /api 代理到了 https://vue-js.com/api/v1
      // 最终的请求 https://vue-js.com/api/v1/topics
      // console.log(res);
      // console.log(res.data);
      commit("getArticles", res.data);
    },
    async getArticle({ commit }, id) {
      commit("getArticle", null);
      // 请求文章的时候加上 accesstoken 参数可以得到 该文章用户是否收藏了或者文章的评论用户是否点赞了
      // 当用户登录了我们就需要获取以上信息
      // 用户登录了的话请求就需要加上 accesstoken 参数
      const token = localStorage.getItem("token");
      // const queryStr = token ? `?accesstoken=${token}` : "";
      const queryObj = token ? { params: { accesstoken: token } } : {};
      // const res = await $axios.get(`/topic/${id}${queryStr}`);
      const res = await $axios.get(`/topic/${id}`, queryObj);
      commit("getArticle", res.data);
    },
    async getUserInfo({ commit }, token) {
      // 假装是后台 判断 token 对不对
      if (token === "79b3b12e-9631-467b-9210-c68449c98a35") {
        const res = await $axios.get("/user/sunny-zz");
        // console.log("登陆成功");
        localStorage.setItem("token", token);
        commit("getUserInfo", res.data);
      } else {
        alert("token 不太对");
      }
    },
    async getOtherUserInfo({ commit }, username) {
      const res = await $axios.get(`/user/${username}`);
      // console.log(res);
      commit("getOtherUserInfo", res.data);
    }
  },
  getters: {
    // otherUserInfo 进行计算
    recent_topics(state) {
      // console.log(state.otherUserInfo);
      const { otherUserInfo } = state;
      return otherUserInfo ? otherUserInfo.recent_topics : [];
    }
  },
  modules: {}
});
