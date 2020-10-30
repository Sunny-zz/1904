// import axios from 'axios'
// import Vue from 'vue'
const cart = {
  state: () => ({ 
    cart: {
      // 购物车中的商品 id 数组
      productIdsInCart: [],
      // 每个 id 对应的商品买了几个
      quantityById: {}
    }
  }),
  mutations: { 
    //点击 add to cart 添加商品到购物车
    addToCart(state,id){
      const { productIdsInCart,quantityById } = state.cart
      if(!productIdsInCart.includes(id)){
        // 没买过当前点击的商品
        productIdsInCart.push(id)
        // quantityById[id] = 1
        // 因为 getQuantityById 计算属性使用了 quantityById 对象做计算，那么当使用上述语法修改 quantityById 的时候  getQuantityById 并不会重新计算，所以修改方案替换成 重新赋值
        state.cart.quantityById = {
          ...quantityById,
          [id] : 1
        }
      }else{
        // 买过了
        // quantityById[id] = quantityById[id] + 1
        // 上述操作执行了，而且没毛病，但是视图不更新,需要重新给对象赋值使用 vue 的 set 方法修改
        // 但是 vue 的 set 方法只能响应根的 state 的修改 也就是说 cart 的
        // Vue.set(quantityById, [id], quantityById[id] + 1)
        // {
        //   1: 2,
        //   2: 3
        // }
        // 拷贝
        // {
        //   1: 2,
        //   2: 3   被替换
        //   2：3+ 1
        // }
        state.cart.quantityById = {...quantityById, [id]:quantityById[id] + 1}
      }
    },
    checkout(state){
      state.cart.productIdsInCart = []
      state.cart.quantityById = {}
    }
  },
  actions: { 

  },
  getters: {
    // 购物车中的展示数组
    productsInCart(state,getters,rootState){
      // 该模块内的state
      // console.log(state);
      // 全局 getters 
      // console.log(getters);
      // 整个 store 的数据
      // console.log(rootState);
      const { productIdsInCart, quantityById  } = state.cart
      const { products }  = rootState.products
      // console.log(1);
      return products.length ? productIdsInCart.reduce((res, ele) => {
        res.push({ ...products.find((item) => item.id === ele), quantity: quantityById[ele] })
        return res
      }, []) : []
    },
    total(state,getters){
      // console.log(getters);
      return getters.productsInCart.reduce((res,ele)=> res + ele.price * ele.quantity , 0)
    },
    getQuantityById(state){
      // return (id)=> {

      //   const val = state.cart.quantityById[id] || 0
      //   console.log(val);
      //   return val
      // }
      
      return id => {
        // console.log(state.cart.quantityById[id]);
        return state.cart.quantityById[id] || 0
      }
    }
  },
}

export default cart