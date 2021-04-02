import axios from '../utils/request';

// 所有的请求
// 获取列表
export function getList() {
  return axios.get('list')
}
