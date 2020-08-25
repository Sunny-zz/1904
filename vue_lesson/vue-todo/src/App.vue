<template>
  <div class="todo-wrap">
    <h1>todo mvc</h1>
    <TodoHeader ref="todoHeader" @add-todo="addTodo" />
    <TodoList :delTodo="delTodo" :changeTodoState="changeTodoState" :todos="showTodos" />
    <TodoFooter @change-type="changeType" :type="type" :activeNum="activeNum" />
    <button @click="show">测试</button>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'
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
          done: false
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
