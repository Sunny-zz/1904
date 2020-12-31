import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 10000
  },
  mutations: {
    add(state){
      state.count ++
    }
  },
  actions: {
    add({commit}){
      commit('add')
    }
  },
  getters: {
    countSquare(state){
      return Math.sqrt(state.count)
    }
  }
})


export default store