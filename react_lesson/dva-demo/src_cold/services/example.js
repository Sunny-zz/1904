import request from '../utils/request';
const baseUrl = '/api'
// 所有的请求
export function query() {
  return request('/api/users');
}
// 请求文章列表
export function getList () {
  return request(baseUrl + '/posts')
}

