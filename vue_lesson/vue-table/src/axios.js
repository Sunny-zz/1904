// 封装 axios 请求
// 将请求整合到一处便于管理
import axios from "axios";
// axios 请求就会返回一个 promise
// 当你的请求都是基于一个服务器下的时候，可以给请求设置基地址
// 配置 axios 请求的默认基地址
axios.defaults.baseURL = "http://localhost:3000/books";
const $http = config => {
  // 将函数的参数设置成对象的话比较好
  // 因为将对象拆分成三个参数的话必须传递三个参数才能一一对应.
  // 对象是有属性名的，属性名对应即可

  return axios(config);
};

export { $http };
