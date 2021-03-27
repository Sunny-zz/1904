// 创建 store 并应用中间件 logger
import { createStore, applyMiddleware } from "redux";
import reduxLogger from 'redux-logger'
import reduxThunk from 'redux-thunk'
import rootReducer from '../reducers'

export default createStore(rootReducer, applyMiddleware(reduxLogger, reduxThunk))