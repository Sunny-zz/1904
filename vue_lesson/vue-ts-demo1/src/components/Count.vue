<template>
  <div>
    <!-- 学习 PropSync  Model 装饰器 -->
    <div>{{ cunt }}</div>
    <button @click="changeCount(200)">修改父组件传递的 count</button>
    <hr />
    <input
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <!-- <input
      type="text"
      :value="value"
      @input="changeText($event.target.value)"
    /> -->
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  PropSync,
  Emit,
  Model,
  Prop
} from 'vue-property-decorator'

@Component
export default class Count extends Vue {
  @PropSync('count', { type: Number })
  cunt!: number

  @Emit('update:count')
  changeCount(num: number) {}

  // @Model 装饰器 用法
  // @Model(eventName, 类型校验)    eventName 代表的是 v-model 传递的事件名 默认传递 input
  // input 事件虽然在装饰器里面接收了，但并不是子组件的一个方法   说白了就是接收了一个自定义事件 input
  // 装饰器装饰的就是传递过来的 props 也就是 value
  @Model('input', { type: String })
  value!: string

  // @Emit('input')
  // changeText(str: string) {}
  created() {
    console.log(this)
  }
}
</script>

<style scoped>
</style>