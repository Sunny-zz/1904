import axios from 'axios'
import { DEL_POST, GET_POSTS } from '../constants/ActionTypes'
// getPosts action 创建函数需要带异步操作。所以要使用 redux-thunk 语法
axios.defaults.baseURL = 'http://www.test.com'
// 获取当前页文章列表
export const getPosts = (page) => async dispatch => {
  const res = await axios.post('/posts', {page, limit: 10})
  dispatch({ type: GET_POSTS, posts: res.data })
}
// 删除具体文章
export const delPost = id => async dispatch => {
  const res = await axios.post(`/post/${id}`)
  res.data.success === '删除成功' && dispatch({ type: DEL_POST, id })
}