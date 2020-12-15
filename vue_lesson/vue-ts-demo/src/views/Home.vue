<template>
  <div>
    <Header @change-show-todos="changeShowTodos" />
    <hr />
    <div class="todo-list" v-if="showTodos.length">
      <TodoItem v-for="todo in showTodos" :key="todo.id" v-bind="todo" />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import TodoItem from '../components/TodoItem.vue'
import Header from '../components/Header.vue'
import $axios from '../plugins/axios'

export interface SearchObj {
  titleStr: string;
  type: string;
}

interface TodoItemObj {
  id: string;
  title: string;
  type: string;
  content: string;
}

@Component({
  components: {
    TodoItem,
    Header
  }
})
export default class Home extends Vue {
  // 将 todos 定义成具体对象的数据，这个对象需要定义接口
  todos: Array<TodoItemObj> = []
  showTodos: Array<TodoItemObj> = []
  async created () {
    const res = await $axios.get('/todos')
    this.todos = res.data
    this.showTodos = res.data
  }

  changeShowTodos ({ titleStr, type }: SearchObj) {
    if (!titleStr && !type) {
      this.showTodos = this.todos
    } else {
      this.showTodos = this.todos.filter(
        (todo) => todo.title.includes(titleStr) && todo.type === type
      )
    }
  }
}
</script>

<style scoped>
.todo-list {
  width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
</style>
