import axios from "axios";
// import Vue from "vue";
// www.vue-js.com/api/v1/topics
axios.defaults.baseURL = "/api";
axios.interceptors.response.use(res => res.data);
const $axios = axios;
export default $axios;

// Vue.prototype.$http = axios;
