<template>
  <div style="padding: 20px; border: 1px solid #ccc; margin-bottom: 100px">
    <div>
      父组件内的 data
      <div>number-obj: {{ obj }}</div>
      <div>number: {{ number }}</div>
    </div>
    <!-- <Son :number="number" @chang-number="changeNumber" /> -->
    <!-- 简化父组件定义方法传递给子组件调用 -->
    <!-- <Son :number="number" @update:number="number = $event" /> -->
    <!-- 上述模式的简写语法  .sync -->
    <!-- <Son :number.sync="number" /> -->
    <!-- 将 obj 内的属性全部传递给子组件 并且每个属性都有 .sync 功能 -->
    <!-- <Son v-bind.sync="obj" /> -->
    <!-- <Son :value="number" @input="number = $event" /> -->
    <!-- 上面模式的简写 -->
    <Son v-model="number" />
  </div>
</template>
<script>
import Son from './Son'
export default {
  name: 'Parent',
  components: {
    Son
  },
  data() {
    return {
      number: 1000,
      obj: {
        number1: 10,
        number2: 100
      }
    }
  },
  methods: {
    // changeNumber(number) {
    //   this.number = number
    // }
  }
}
</script>
<style></style>