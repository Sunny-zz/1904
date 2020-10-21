// 创建 vuex 的 store 仓库
import Vuex from 'vuex'
import Vue from 'vue'

// 一. 导入 vuex 和 vue 使用 Vue 的 use 方法将  vuex 做成全局
Vue.use(Vuex)

// 二. 创建 store 仓库，需要使用 Vuex.Store 类(class)  创建
// 创建的时候需要传递参数
const store = new Vuex.Store({
  // 1. state 放组件共享的数据
  state: {
    // 在这里放的就是共享的组件数据
    num: 2000
  },
  // 2. mutations 放修改 store 内数据的方法
  // 修改方法默认接收 state 作为第一个参数
  // 需要的话可以设置第二个参数接收 commit 传递的第二个参数
  // 不能设置第三个或者更多，那么想要传递多条数据可以将第二个参数设置成对象

  // commit 提交 mutation 可以直接使用 对象形式提交,那么 mutation 函数的第二个参数就会接受整个对象

  // 想要修改共享数据的话，直接对 state 内的数据进行修改即可
  mutations:{
    add(state){
      state.num++
    },
    change(state,payload){
      // console.log(payload);
      state.num = payload.newNum
    }
  }
})


// 三. 将创建好的 store 导出
export default store

// 四. 在 main 内导入，并且在创建整个 vue 项目的实例的时候添加上 store

// 上述四步完毕之后，vue 项目的所有组件内都可以使用了