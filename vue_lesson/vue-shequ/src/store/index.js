import Vue from "vue";
import Vuex from "vuex";
import $axios from "../plugins/axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articleList: null,
    // type: "all"
    article: null
  },
  mutations: {
    getArticles(state, list) {
      state.articleList = list;
    },
    getArticle(state, article) {
      state.article = article;
    }
  },
  actions: {
    async getArticles({ commit }, tab) {
      // const res = await $axios.get("/topics", {
      //   params: { page: 2, tab: "share" }
      // });
      // console.log(tab);
      commit("getArticles", null);
      const queryStr = tab && tab !== "all" ? `?tab=${tab}` : "";
      const res = await $axios.get(`/topics/${queryStr}`);
      //  /api/topics  发的请求
      // 由于以的服务器设置了代理  将 /api 代理到了 https://vue-js.com/api/v1
      // 最终的请求 https://vue-js.com/api/v1/topics
      // console.log(res);
      // console.log(res.data);

      commit("getArticles", res.data);
    },
    async getArticle({ commit }, id) {
      const res = await $axios.get(`/topic/${id}`);
      commit("getArticle", res.data);
    }
  },
  modules: {}
});
