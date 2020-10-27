<template>
  <div class="todo-demo">
    <h1>todomvc</h1>
    <div class="todo-wrap">
      <TodoHeader />
      <TodoContent />
      <TodoFooter />
    </div>
  </div>
</template>
<script>
import TodoHeader from './components/TodoHeader'
import TodoContent from './components/TodoContent'
import TodoFooter from './components/TodoFooter'
export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoContent,
    TodoFooter
  }
}
</script>
<style>
body {
  background-color: #ccc;
}
.todo-demo h1 {
  text-align: center;
}
.todo-wrap {
  width: 500px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 2px 2px 2px #eee;
}
</style>