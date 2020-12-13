import Vue from 'vue'
import Vuex from 'vuex'

import { ICompany } from './modules/company'
Vue.use(Vuex)

//  vue内ts写法的 store   
// 可以借助  一下两个工具包操作 推荐第二个
// vuex-class 
// vuex-module-decorators   针对于 store 的 module 写法



// export default new Vuex.Store({
//   // state: {
//   //   // str: 'hello world'
//   // },
//   // mutations: {
//   // },
//   // actions: {
//   // },
//   // modules: {
//   //   company: 
//   // }
// })

// IRootState 
interface IRootState {
  // 所有模块内的数据接口类型,都声明在这
  // 也就是 store 内的 state 的对象的接口类型
  company: ICompany
}




export default new Vuex.Store<IRootState>({})
