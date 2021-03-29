import { DEL_POST, GET_POSTS } from "../constants/ActionTypes"

// 制作 posts store 数据
const initialState = []
const posts = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return action.posts
    case DEL_POST:
      return state.filter(post => post.id !== action.id)
    default:
      return state
  }
}
export default posts

