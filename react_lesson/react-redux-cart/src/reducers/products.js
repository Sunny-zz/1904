import { ADD_TO_CART, GET_PRODUCTS } from "../constants/ActionTypes"

// reducer 的拆分 将 products 拆分出一个新的 reducer
// const initialState = []
const products = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { id } = action
      const currentProductIndex = state.findIndex(product => product.id === id)
      const currentProduct = state[currentProductIndex]
      const copyCurrentProduct = { ...currentProduct }
      copyCurrentProduct.inventory--
      const copyProducts = [...state]
      copyProducts.splice(currentProductIndex, 1, copyCurrentProduct)
      return copyProducts
    case GET_PRODUCTS:
      return action.products
    default:
      return state
  }
}
export default products