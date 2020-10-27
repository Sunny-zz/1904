<template>
  <div class="todo-header">
    <input
      v-if="todos.length"
      class="all"
      type="checkbox"
      :checked="getTypeNums('active') === 0"
      @change="changeAll($event.target.checked)"
    />
    <input
      @keydown.enter="add"
      class="todo-text"
      type="text"
      v-model="todoText"
    />
  </div>
</template>
<script>
// const thisObj = {
//   todoText: 'ahahahh'
// }
// let todoText = thisObj.todoText
// todoText = ''
// console.log(todoText)
// thisObj.todoText = ''
// console.log(thisObj)

import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
  name: 'TodoHeader',
  data() {
    return {
      todoText: ''
    }
  },
  computed: {
    ...mapState(['todos']),
    ...mapGetters(['getTypeNums'])
  },
  methods: {
    ...mapMutations(['addTodo', 'changeAll']),
    add() {
      console.log('添加 todo')
      const { todoText } = this
      if (todoText.trim()) {
        this.addTodo({
          todo: {
            id: new Date().getTime(),
            todoText,
            isCompleted: false,
            editState: false
          }
        })
        this.todoText = ''
      }
    }
  }
}
</script>
<style>
.todo-header {
  display: flex;
  height: 60px;
  border-bottom: 1px solid #ccc;
  align-items: center;
}
.todo-header > .todo-text {
  width: 300px;
  height: 30px;
  margin-left: 20px;
}
</style>