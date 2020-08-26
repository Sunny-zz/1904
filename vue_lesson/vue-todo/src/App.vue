<template>
  <div class="todo-wrap">
    <h1>todo mvc</h1>
    <TodoHeader
      @change-all-state="changeAllState"
      :isAllDone="isAllDone"
      ref="todoHeader"
      @add-todo="addTodo"
    />
    <TodoList :delTodo="delTodo" :changeTodoState="changeTodoState" :todos="showTodos" />
    <TodoFooter @change-type="changeType" :type="type" :activeNum="activeNum" />
    <button @click="show">测试</button>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'

// const arr = [{ a: 10 }, { a: 20 }, { a: 30 }]
// const arr1 = arr.map((item) => item)
// console.log(arr[0] === arr1[0])

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  },
  data() {
    return {
      todos: [
        {
          id: 'eyt66t',
          text: '666',
          done: true
        },
        {
          id: 'eyt96t',
          text: '哇塞',
          done: false
        },
        {
          id: 'eyt97t',
          text: '厉害',
          done: true
        }
      ],
      type: 'all'
    }
  },
  computed: {
    activeNum() {
      return this.filterTodos('active').length
    },
    showTodos() {
      // 要根据todo底部的类别筛选出满足条件的数组然后给 todoList 展示
      // all  ===>  保留所有
      // active ===> 保留未完成的
      // completed ===> 保留已完成的
      const { type } = this
      return this.filterTodos(type)
    },
    isAllDone() {
      // return this.filterTodos('active').length === 0 ? true : false
      return this.todos.every((item) => item.done)
    }
  },
  methods: {
    // addTodo 功能完全在父组件内执行
    // addTodo(todoText, callBack) {
    //   if (todoText) {
    //     this.todos.push({
    //       id: new Date().getTime().toString(),
    //       text: todoText,
    //       done: false
    //     })
    //     // this.$refs.todoHeader.value = ''
    //     callBack()
    //   }
    // },
    // addTodo 只是父组件的修改 data 方法，什么时候修改需要在子组件判断   推荐使用方案
    addTodo(todoText) {
      this.todos.push({
        id: new Date().getTime().toString(),
        text: todoText,
        done: false
      })
    },
    show() {
      console.log(this.$refs.todoFoo)
    },
    delTodo(id) {
      this.todos = this.todos.filter((item) => item.id !== id)
    },
    changeTodoState(id) {
      const currentTodo = this.todos.find((item) => item.id === id)
      currentTodo.done = !currentTodo.done
    },
    changeType(type) {
      this.type = type
    },
    filterTodos(type) {
      return this.todos.filter((item) =>
        type === 'all' ? true : type === 'active' ? !item.done : item.done
      )
    },
    changeAllState(state) {
      // [{done: true,...},{done:false,...},{done: true,...}]
      // true
      // 数组方法 map
      // 下面的写法就是使用map 生辰一个新的数组，这个数组内的所有元素给之前也没关系
      // this.todos = this.todos.map((item) => {
      //   const newItem = { ...item }
      //   newItem.done = state
      //   return newItem
      // })
      this.todos.forEach((item) => {
        item.done = state
      })
    }
  }
}
</script>

<style>
.todo-wrap {
  width: 400px;
  margin: 0 auto;
}
</style>
