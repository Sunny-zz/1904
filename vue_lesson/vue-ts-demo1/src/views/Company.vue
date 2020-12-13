<template>
  <div>
    <h1>公司简介</h1>
    <ul v-if="arr.length">
      <li v-for="item in arr" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
//
import { CompanyStore } from '../store/modules/company'
// CompanyStore 就是 company 模块内 state 数据以及其他的 mutation  action getters 等
@Component
export default class Company extends Vue {
  get arr() {
    return CompanyStore.arr
  }
  async created() {
    // CompanyStore.getArr([1, 2, 3])
    await CompanyStore.fetchArr()
    window.console.log('store内arr的计算属性 len', CompanyStore.len)
  }
}
</script>

<style scoped>
</style>