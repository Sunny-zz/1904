// 创建 vuex 的 store 仓库
import Vuex from 'vuex'
import Vue from 'vue'
import {ADD ,CHANGE} from './mutation-types'
// 一. 导入 vuex 和 vue 使用 Vue 的 use 方法将  vuex 做成全局
Vue.use(Vuex)

// 二. 创建 store 仓库，需要使用 Vuex.Store 类(class)  创建
// 创建的时候需要传递参数
const store = new Vuex.Store({
  // 1. state 放组件共享的数据
  state: {
    // 在这里放的就是共享的组件数据
    num: 2000,
    arr:[]
  },
  // 2. mutations 放修改 store 内数据的方法
  // 修改方法默认接收 state 作为第一个参数
  // 需要的话可以设置第二个参数接收 commit 传递的第二个参数
  // 不能设置第三个或者更多，那么想要传递多条数据可以将第二个参数设置成对象

  // commit 提交 mutation 可以直接使用 对象形式提交,那么 mutation 函数的第二个参数就会接受整个对象

  // 想要修改共享数据的话，直接对 state 内的数据进行修改即可
  mutations:{
    [ADD](state){
      state.num++
    },
    [CHANGE](state,payload){
      // console.log(payload);
      state.num = payload.newNum
    },
    updateArr(state,payload){
      console.log('要修改 arr');
      //mutation 函数只能是同步函数不能包含异步操作
      // setTimeout(() => {
      //   state.getArr = [1,2,3]
      // }, 1000);
      state.arr = payload.res
    }
  },
  actions:{
    // 只要有 action 函数就会有对应的 mutation 函数，所以名称一般写成重名的
    // action 函数默认接受一个 context 作为参数 context 是一个对象，对象下有 commit 方法 以及 store 内的 state
    // 当没有异步操作的时候也可以设置 action 函数
    updateArr({commit},payload){
      console.log(payload.id);
      setTimeout(() => {
        commit({type: 'updateArr',res: [11,22,30]})
      }, 2000);
    }
  },
  // store 的计算属性 getters

  getters: {
    // getters
    // getters 内的函数的第一个参数默认接收 state 作为参数
    // getters 内的函数的第二个参数是 store 的所有 getters 
    // 下面的 sum 是求和计算属性
    sum(state,getters){
      console.log(getters);
      return state.arr.reduce((res,ele)=> res +=ele,0)
    },
    // 下面的 getNum 是获取对应的某个 num , 跟给定的值最接近的那个数
    // 做此功能需要组件内传递限定值
    // 但是默认 getters 的函数是不能接收组件内传递参数的，想要传递话，需要将 getters 函数写成 返回一个函数的函数 ,再返回的函数内接收参数，而且返回的函数的返回值是最终的计算属性
    getNum(state){
      // 20    [11,22,30]      绝对值  Math.abs(x)
      return (limitNum)=> {
        const arr = state.arr
        let res = arr[0]
        if(!(res - limitNum === 0)){
          for (let i = 1; i < arr.length; i++) {
            if(Math.abs(arr[i]- limitNum) < Math.abs(res - limitNum) ){
              res = arr[i]
              if(arr[i] - limitNum === 0){
                break
              }
            }
          }
        }
        return res
      }
    }
    // x(){
    //   return 1000
    // },
    // y(){
    //   return 10
    // }
  }
})


// 三. 将创建好的 store 导出
export default store

// 四. 在 main 内导入，并且在创建整个 vue 项目的实例的时候添加上 store

// 上述四步完毕之后，vue 项目的所有组件内都可以使用了