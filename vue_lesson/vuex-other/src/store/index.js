import Vue from 'vue'
import Vuex from 'vuex'
// import createLogger from 'vuex/dist/logger'
// vuex 自带的 logger 插件，就是当 store 数据发生改变的时候，自动在浏览器中打印详情
import a from './modules/a'
import b from './modules/b'
Vue.use(Vuex)

export default new Vuex.Store({
  // 当触发开发环境下执行 vuex 的严格模式
  strict: process.env.NODE_ENV !== 'production',
  state: {
    count: 10,
    obj: {
      name: '李白',
      age: 28
    }
  },
  mutations: {
    add(state){
      state.count ++
    },
    changeObjName(state,newName){
      state.obj.name = newName
    }
  },
  actions: {
  },
  // plugins: [createLogger()],
  modules: {
    a,
    b
  }
})
