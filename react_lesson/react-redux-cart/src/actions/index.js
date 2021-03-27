// 这个是存储 action 创建函数的文件， 
// 为什么需要用函数创建 action ，这样比较好，有助于测试和移植
// 还有一个好处就是在容器组件创建 dispatch 的时候可以直接新简写，就是将 mapDispatchToProps 直接使用对象与法
import { ADD, ADD_TO_CART, CHECKOUT, GET_PRODUCTS, SUB } from "../constants/ActionTypes";
import axios from 'axios'

export const addToCart = id => ({
  type: ADD_TO_CART,
  id
})

export const checkout = () => ({
  type: CHECKOUT
})

// getProducts 是异步请求接收之后要发出的
// redux 提倡将异步操作封装到 action 创建函数内， 但是 action 创建函数只是一个函数返回一个对象， 直接写异步请求的话会有问题，就是组件内导入 action 创建函数的时候可能无法将其制作成 dispatch 函数 
// export const getProducts = (products) => ({
//   type: GET_PRODUCTS,
//   products
// })

// 普通的 action 创建函数不能添加如何的其他操作，只能导出对象，当 action 创建函数内需要添加异步操作的话，那么需要借助 redux 的中间件去创建 异步 action
// redux-thunk
// 异步 action 需要写成一个函数返回另一个函数
// 第一个函数的参数是 action 创建函数的参数，也就是调用的时候传递的参数
// 第二个函数默认接收 dispatch 作为参数， 函数内部写 异步操作, 并使用 dispatch 发 action
export const getProducts = () => async dispatch => {
  const res = await axios.get('http://localhost:3008/products')
  dispatch({ type: GET_PRODUCTS, products: res.data })
}

export const add = () => ({
  type: ADD
})

export const sub = () => ({
  type: SUB
})