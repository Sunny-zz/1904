import axios from 'axios'
import { CLEAR_POST, CREATE_POST, DEL_POST, EDIT_POST, GET_POST, GET_POSTS } from '../constants/ActionTypes'
// getPosts action 创建函数需要带异步操作。所以要使用 redux-thunk 语法
axios.defaults.baseURL = 'http://localhost:3000'
// 获取当前页文章列表
export const getPosts = (page) => async dispatch => {
  const res = await axios.post('/posts', { page, limit: 10 })
  dispatch({ type: GET_POSTS, posts: res.data })
}
// 删除具体文章
export const delPost = id => async dispatch => {
  const res = await axios.delete(`/post/${id}`)
  res.data.success === '删除成功' && dispatch({ type: DEL_POST, id })
}
// 获取文章详情
export const getPost = id => async dispatch => {
  const res = await axios.get(`/post/${id}`)
  dispatch({type: GET_POST, post: res.data})
}

// 清空当前的文章详情数据
export const clearPost = () => ({type: CLEAR_POST})

// 编辑文章详情
export const editPost = newPost => async dispatch=> {
  const res = await axios.post(`/post/${newPost.id}`, {post: newPost})
  console.log(res)
  // DEIT_POST action 其实要修改 store 的两种数据  1. post  2. posts
  res.data.success === '编辑成功' && dispatch({ type: EDIT_POST, newPost })
}
// 创建文章
export const createPost = newPost => newPost ? async dispatch => {
  const res = await axios.post(`/posts/create`, {post: newPost})
  dispatch({type: CREATE_POST, newPost: res.data})
} : ({type: CREATE_POST})


