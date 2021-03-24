import { ADD_TO_CART, CHECKOUT } from '../constants/ActionTypes'

const initialState = {
  products: [
    { "id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2 },
    { "id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10 },
    { "id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5 }
  ],
  cart: {
    // 在购物车中的商品 id 数组
    productIdsInCart: [],
    // 根据 id 计算数量， 对应 id 的商品买了几个
    quantityById: {}
  }
}

// 创建一个功能型函数 主要作用是 制作一个购物车商品数组
// [{ "id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 0 , quantity: 2}...]
export const getProductsInCart = (products, cart) => {
  return cart.productIdsInCart.map(id => {
    const productById = { ...products.find(product => product.id === id) }
    return {
      ...productById,
      quantity: cart.quantityById[id]
    }
  })
}
// 创建一个功能函数，用来计算购物车商品总价
export const getTotal = cartList => {
  return cartList.length ? cartList.reduce((res, ele) => res += ele.price * ele.quantity, 0) : 0
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // 这个功能需要提供额外的参才能实现 

      // 更新 products 数据
      const { id } = action
      const currentProductIndex = state.products.findIndex(product => product.id === id)
      const currentProduct = state.products[currentProductIndex]
      const copyCurrentProduct = { ...currentProduct }
      copyCurrentProduct.inventory--
      const copyProducts = [...state.products]
      copyProducts.splice(currentProductIndex, 1, copyCurrentProduct)

      // 更新 cart 数据
      const copyCart = {
        productIdsInCart: [...state.cart.productIdsInCart],
        quantityById: {
          ...state.cart.quantityById
        }
      }
      const { productIdsInCart, quantityById } = copyCart
      if (!productIdsInCart.includes(id)) {
        // 第一次买该商品
        productIdsInCart.push(id)
        quantityById[id] = 1
      } else {
        quantityById[id]++
      }
      return {
        ...state,
        cart: copyCart,
        products: copyProducts
      }
    case CHECKOUT: 
      return {
        ...state,
        cart: {
          productIdsInCart: [],
          quantityById: {}
        }
      }
    default:
      return state
  }
}

export default rootReducer