// 使用 redux 存储我们共享的状态 state

// 如何创建 store
// 1. 导入 createStore 方法从 redux 中
import { createStore, applyMiddleware } from 'redux'
// 中间件 辅助功能  redux-logger   当 store 发生改变的时候 控制台提示 store 数据
// 中间件需要使用 applyMiddleware 方法加载
import reduxLogger from 'redux-logger'
// createStore 是创建 store 的方法，该方法需要接收一个参数，这个参数必须是函数，函数被称为 reducer 函数

import {ADD, SUB} from './actionTypes'
// 2. 创建 reducer 函数
// reducer 函数的作用是设置初始的 store 内的数据，并且提供修改的方法
// reducer 函数必须设置返回值，当作 store 内的数据 
// 一般这个函数设置两个参数， 1. store的初始值  2. 修改 store 的类型（action）
// 这个函数参数的初始值必须设置，因为这个函数是 createStore 内自动执行的
const rootReducer = (state = 10, action) => {
  // action 是一个对象 对象下必须有一个 type 属性 ，该属性代表的是修改 store 的类型(比如 删除，添加，修改 等等)，而且需要是大写字符串多个单词组合使用下划线链接
  switch (action.type) {
    case ADD:
      // 对 state 不能直接进行修改
      return state + 1
    case SUB:
      return state - 1
    default:
      return state
  }
}

// 3. 创建 store 
// 创建 store 的时候添加一些中间件功能
const store = createStore(rootReducer, applyMiddleware(reduxLogger))
export default store