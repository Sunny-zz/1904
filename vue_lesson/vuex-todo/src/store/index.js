import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 公共的筛选方法
// 给定数组和类型 筛选出对应的数组
// 给定数组和类型 筛选出对应的数组获取长度
const filterMethod = (arr,type) =>{
  return arr.filter( ele => type ==='active' ? !ele.isCompleted : type === 'completed' ? ele.isCompleted : true )
}

// const obj = {
//   name: 'aaa',
//   age: 10
// }
// let x = obj.name
// x ='aasdas'
// const arr = [{name:'1'},{name:'2'},{name:'3'}]
// const newArr = [...arr]
// newArr[0].name = '1111'
// console.log(arr);
// console.log(newArr);


export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        todoText: '吃饭',
        isCompleted: true,
        editState: false
      },
      {
        id: 2,
        todoText: '睡觉',
        isCompleted: false,
        editState: false
      },
      {
        id: 3,
        todoText: '打游戏',
        isCompleted: true,
        editState: false
      }
    ],
    showType: 'all'
  },
  mutations: {
    addTodo(state,payload){
      state.todos.push(payload.todo)
    },
    delTodo(state,payload){
      state.todos = state.todos.filter(ele => ele.id !== payload.id)
    },
    changeType(state,newType){
      state.showType = newType
    },
    changeTodo(state,id){
      const currentTodo = state.todos.find(ele => ele.id === id)
      currentTodo.isCompleted = !currentTodo.isCompleted
    },
    changeAll(state,newStatus){
      state.todos.forEach(ele => {
        ele.isCompleted = newStatus
      })
    },
    delAllCompleted(state){
      state.todos = state.todos.filter(ele => !ele.isCompleted)
    },
    changeEditState(state,id){
      // 不仅仅要将双击的那个 todo 变成编辑状态，还要将其他的 todo 编辑状态关闭
      state.todos.forEach(ele => {
        ele.editState = false
        if(ele.id === id){
          ele.editState = true
        }
      })
    },
  },
  getters: {
    // 根据 showType 对 todos 进行筛选
    showTodos(state){
      const {showType,todos} = state
      return filterMethod(todos,showType)
    },
    // 看 todos 内的 active 类型的个数 以及 completed 类型个数
    getTypeNums(state){
      return (type) => filterMethod(state.todos,type).length
    }
  }
})
