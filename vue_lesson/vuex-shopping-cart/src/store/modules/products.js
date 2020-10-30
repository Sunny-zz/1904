import axios from 'axios'
// store 内的 products 模块
// 包括 state mutations actions getters
const products = {
  state: () => ({ 
    products: []
  }),
  // 模块内部的 action、mutation 和 getter 是注册在全局的

  // 模块内的 state 是一个函数必须返回一个对象
  mutations: { 
    getProducts(state,payload){
      state.products = payload.products
    },
    checkout(state,productsInCart){
      // state.products 是属于商品列表数据
      // productsInCart 是购物车中的商品列表数据
      state.products.forEach((ele)=>{
        const product = productsInCart.find(item=> item.id === ele.id)
        // 这个变量是在购物车中查找当前商品是否买过了，买过了的话获取购物车中的商品数据
        if(product){
          ele.inventory = ele.inventory -  product.quantity
        }
      })
    }
  },
  actions: { 
    getProducts({commit}){
      axios.get('http://localhost:3008/products').then(res => {
        // console.log(res.data);
        setTimeout(() => {
          commit({
            type: 'getProducts',
            products: res.data
          })
          
        }, 1000);
      })
    }
  }
}

export default products