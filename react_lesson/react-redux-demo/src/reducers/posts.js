import { CREATE_POST, DEL_POST, EDIT_POST, GET_POSTS } from "../constants/ActionTypes"

// 制作单页文章列表 posts store 数据
const posts = (state = [], action) => {
  switch (action.type) {
    case GET_POSTS:
      return action.posts
    case DEL_POST:
      return state.filter(post => post.id !== action.id)
    case EDIT_POST:
      const copyState = [...state]
      const ind = copyState.findIndex(post => post.id === action.newPost.id)
      copyState[ind] = action.newPost
      return copyState
    case CREATE_POST:
      return action.newPost ? [...state, action.newPost] : state
    default:
      return state
  }
}

// 文章总数 postsTotal 
// const postsTotal = (state = 0, action) => {
//   switch (action.type) {
//     case GET_POSTS:
//       return action.posts
//     case DEL_POST:
//       return state.filter(post => post.id !== action.id)
//     default:
//       return state
//   }
// }


export default posts

