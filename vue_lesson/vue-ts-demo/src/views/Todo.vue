<template>
  <div v-if="$route.params.id ? todo : true ">
    <el-button type="primary" @click="$router.push('/')">返回</el-button>
    <el-button v-if="!isEdit && $route.params.id" type="primary" @click="edit"
      >编辑</el-button
    >
    <el-button
      v-if="isEdit && $route.params.id"
      type="primary"
      @click="isEdit = false"
      >取消</el-button
    >
    <el-button v-if="isEdit" type="primary" @click="save">保存</el-button>
    <div v-if="!isEdit">
      <h2>{{ todo.title }}</h2>
      <h3>{{ todo.type }}</h3>
      <p>{{ todo.content }}</p>
    </div>
    <div v-else>
      <el-input v-model="input" placeholder="请标题内容"></el-input>
      <el-select v-model="value" clearable placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-input
        type="textarea"
        :rows="5"
        placeholder="请输入内容"
        v-model="textarea"
      >
      </el-input>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { TodoItemObj } from './Home.vue'
import $axios from '../plugins/axios'
@Component
export default class Todo extends Vue {
  $route
  $router
  todo: TodoItemObj = null
  isEdit = false
  input = ''
  value = ''
  textarea = ''
  options = [
    {
      value: 'study'
    },
    {
      value: 'life'
    }
  ]

  async created () {
    const { id } = this.$route.params
    if (id) {
      const res = await $axios.get(`http://localhost:3008/todos/${id}`)
      this.todo = res.data
    } else {
      this.isEdit = true
    }
  }

  edit () {
    this.isEdit = true
    this.input = this.todo.title
    this.value = this.todo.type
    this.textarea = this.todo.content
  }

  async save () {
    const { todo, input, value, textarea } = this
    const newTodo: TodoItemObj = {
      title: input,
      type: value,
      content: textarea
    }
    if (todo) {
      const res = await $axios.patch(
        `http://localhost:3008/todos/${todo.id}`,
        newTodo
      )
      this.todo = res.data
    } else {
      const res = await $axios.post('http://localhost:3008/todos', newTodo)
      this.$router.push(`/todo/${res.data.id}`)
      this.todo = res.data
    }
    // console.log(res.data)
    this.isEdit = false
    // this.input = ''
    // this.value = ''
    // this.textarea = ''
  }
}
</script>

<style scoped>
</style>
