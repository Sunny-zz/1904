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