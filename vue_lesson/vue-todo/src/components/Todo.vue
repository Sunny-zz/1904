<template>
  <div class="todo-item">
    <input type="checkbox" :checked="todo.done" @change="$emit('change-todo-state',todo.id)" />
    <span :class="{ done: todo.done }">{{ todo.text }}</span>
    <button @click="$emit('del-todo',todo.id)">删除</button>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  props: ['todo']
}
</script>

<style>
.todo-item span {
  cursor: pointer;
  user-select: none;
}
.done {
  color: #ccc;
  text-decoration: line-through;
}
</style>
