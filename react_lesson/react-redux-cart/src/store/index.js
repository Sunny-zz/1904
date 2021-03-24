// 创建 store
import { createStore, applyMiddleware } from 'redux'
import reduxLogger from 'redux-logger'
import rootReducer from '../reducers'

export default createStore(rootReducer, applyMiddleware(reduxLogger))