// 和并所有的 reducer
import { combineReducers } from 'redux'
import posts from './posts'
import post from './post'

export default combineReducers({
  posts,
  post
})