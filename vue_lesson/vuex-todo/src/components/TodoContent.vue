<template>
  <div v-if="todos.length">
    <div v-for="todo in showTodos" :key="todo.id" class="todo-item">
      <input
        @change="changeTodo(todo.id)"
        class="status"
        type="checkbox"
        :checked="todo.isCompleted"
      />
      <span
        v-if="!todo.editState"
        :class="['text', { completed: todo.isCompleted }]"
        @dblclick="shuangji(todo.id)"
        >{{ todo.todoText }}</span
      >
      <input
        v-show="todo.editState"
        class="text"
        type="text"
        :value="todo.todoText"
        :ref="todo.id"
      />
      <span v-if="!todo.editState" @click="delTodo({ id: todo.id })" class="del"
        >×</span
      >
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState, mapMutations } from 'vuex'
export default {
  name: 'TodoContent',
  computed: {
    ...mapGetters(['showTodos']),
    ...mapState(['todos'])
  },
  methods: {
    ...mapMutations(['delTodo', 'changeTodo', 'changeEditState']),
    shuangji(id) {
      this.changeEditState(id)
      // 当你上面的语句更新了 state 让某个 编辑框出现了，接下来你就要获取这个编辑框的真实 dom 节点
      // this.$nextTick() 在更新状态之后立即获取 真实 dom 节点
      this.$nextTick().then(() => {
        this.$refs[id][0].focus()
      })
    }
  }
}
</script>
<style>
.todo-item {
  display: flex;
  border-bottom: 1px solid #ccc;
  height: 50px;
  align-items: center;
  /* justify-content: space-between; */
}
.todo-item .text {
  flex-grow: 1;
  margin-left: 10px;
}

.todo-item .del {
  display: none;
  margin-right: 10px;
  cursor: pointer;
}
.todo-item:hover .del {
  display: block;
}
.todo-item .completed {
  text-decoration: line-through;
  color: #ccc;
}
</style>