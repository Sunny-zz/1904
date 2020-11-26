import axios from "axios";
import Vue from "vue";
axios.defaults.baseURL = "https://vue-js.org/api/v1";
axios.interceptors.response.use(res => res.data);

Vue.prototype.$http = axios;
