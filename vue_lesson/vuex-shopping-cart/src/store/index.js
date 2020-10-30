import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import cart from './modules/cart'
Vue.use(Vuex)

export default new Vuex.Store({
  // state: { 
  //   x:10
  // },
  // mutations: {
  // },
  // actions: { 
  // },
  strict:  process.env.NODE_ENV !== 'production',
  modules: {
    products,
    cart
  }
})
