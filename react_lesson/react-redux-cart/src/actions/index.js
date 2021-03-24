// 这个是存储 action 创建函数的文件， 
// 为什么需要用函数创建 action ，这样比较好，有助于测试和移植
// 还有一个好处就是在容器组件创建 dispatch 的时候可以直接新简写，就是将 mapDispatchToProps 直接使用对象与法
import { ADD_TO_CART, CHECKOUT } from "../constants/ActionTypes";

export const addToCart = id => ({
  type: ADD_TO_CART,
  id
})

export const checkout = () => ({
  type: CHECKOUT
})