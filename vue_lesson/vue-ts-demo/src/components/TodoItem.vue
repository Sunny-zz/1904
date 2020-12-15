<template>
  <div class="todo-item">
    <h2 class="title">{{title}}</h2>
    <span class="type">{{type}}</span>
    <div class="content">
      {{content}}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class TodoItem extends Vue {
  @Prop(String)
  id!: string

  @Prop(String)
  title!: string

  @Prop(String)
  content!: string

  @Prop(String)
  type!: string
}
</script>

<style scoped>
.todo-item{
  width: 250px;
  display: flex;
  height: 300px;
  border: 1px solid #ccc;
  flex-direction: column;
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
  margin: 41px;
}
.todo-item .title {
  font-size: 20px;
  margin: 10px 0;
}
.todo-item .type {
  font-size: 14px;
  color: rgb(109, 105, 105);
}
.todo-item .content {
  line-height: 1.5;
}
</style>
