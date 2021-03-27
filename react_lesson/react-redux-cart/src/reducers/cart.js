import { combineReducers } from "redux"
import { ADD_TO_CART, CHECKOUT } from "../constants/ActionTypes"

// reducer 的拆分 将 cart 拆分出一个新的 reducer
// const initialState = {
//   // 在购物车中的商品 id 数组
//   productIdsInCart: [],
//   // 根据 id 计算数量， 对应 id 的商品买了几个
//   quantityById: {}
// }


// const cart = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       const { id } = action
//       const copyCart = {
//         productIdsInCart: [...state.productIdsInCart],
//         quantityById: {
//           ...state.quantityById
//         }
//       }
//       const { productIdsInCart, quantityById } = copyCart
//       if (!productIdsInCart.includes(id)) {
//         // 第一次买该商品
//         productIdsInCart.push(id)
//         quantityById[id] = 1
//       } else {
//         quantityById[id]++
//       }
//       return copyCart
//     case CHECKOUT:
//       return {
//         productIdsInCart: [],
//         quantityById: {}
//       }
//     default:
//       return state
//   }
// }

const productIdsInCart = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { id } = action
      // const copyState = [...state]
      // !copyState.includes(id) && copyState.push(id)
      // return copyState
      if (state.includes(id)) {
        return state
      }
      return [...state, id]
    case CHECKOUT:
      return []
    default:
      return state
  }
}
const quantityById = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { id } = action
      // const copyState = { ...state }
      // copyState[id] ? copyState[id]++ : copyState[id] = 1
      // return copyState
      return {
        ...state,
        [id]: (state[id] || 0) + 1
      }
    case CHECKOUT:
      return {}
    default:
      return state
  }
}
// const cart = combineReducers({
//   productIdsInCart,
//   quantityById
// })

// export default cart

export default combineReducers({
  productIdsInCart,
  quantityById
})

