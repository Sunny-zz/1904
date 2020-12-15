<template>
  <header>
    <el-input v-model="input" placeholder="请标题内容"></el-input>
    <el-select v-model="value" clearable placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :value="item.value">
      </el-option>
    </el-select>
    <el-button @click="search(input,value)" type="primary">搜索</el-button>
    <el-button type="primary">添加</el-button>
  </header>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator'
import { SearchObj } from '../views/Home.vue'
@Component
export default class extends Vue {
  value = ''
  input = ''
  // 将这个数据内的 对象定义成接口
  options = [
    {
      value: 'study'
    },
    {
      value: 'life'
    }
  ]

  @Emit()
  changeShowTodos (searchObj: SearchObj) {
    return searchObj
  }

  search (titleStr1: string, type1: string) {
    const titleStr = titleStr1.trim()
    const type = type1.trim()
    this.changeShowTodos({ titleStr, type })
  }
}
</script>
