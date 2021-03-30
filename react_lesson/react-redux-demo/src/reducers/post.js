import { CLEAR_POST, EDIT_POST, GET_POST, CREATE_POST } from "../constants/ActionTypes"

// 文章详情数据
const post = (state = null, action) => {
  switch (action.type) {
    case CLEAR_POST: 
      return null
    case GET_POST: 
      return action.post
    case EDIT_POST: 
      return action.newPost
    case CREATE_POST:
      return action.newPost ? action.newPost : {}
    default:
      return state
  }
}
export default post