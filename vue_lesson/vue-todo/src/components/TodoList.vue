<template>
  <div v-if="todos.length">
    <Todo
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @del-todo="delTodo"
      @change-todo-state="changeTodoState"
    />
  </div>
</template>

<script>
import Todo from './Todo'
export default {
  name: 'TodoList',
  props: ['todos', 'delTodo', 'changeTodoState'],
  components: {
    Todo
  }
}
</script>

<style></style>
