<template>
  <div>
    <h1>Home</h1>
    <div>
      <button>-</button>
      <span>{{ count }}</span>
      <button @click="add">+</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// 我们通过 vue-property-decorator 导入了 Vue 以及 Component
// vue-property-decorator 是一个vue类组件装饰器 快速方便的使用类组件内的属性和方法

@Component
export default class Home extends Vue {
  // 直接在类里面新增属性就相当于之前的 data
  count = 0
  add() {}
}
</script>

<style scoped></style>
