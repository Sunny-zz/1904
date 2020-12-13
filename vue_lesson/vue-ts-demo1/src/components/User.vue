<template>
  <div>
    <!-- 单一用户组件 展示用户的信息-->
    <p>
      <span> {{ name }} </span>
      <span> {{ age }} </span>
      <span> {{ SEX[sex] }} </span>
      <button @click="changUserAge(id)">年龄+1</button>
      <!-- <button @click="x(id)">年龄+1</button> -->
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'

// export default {
//   props: {
//     id: {
//       type: Number
//     },
//     name: String
//   }
// }

enum SEX {
  '女' = 0,
  '男' = 1
}

@Component
export default class User extends Vue {
  // prop 有的时候会提示错误 你的 prop 有可能是空的值 没有赋值
  // id!   非空断言

  SEX = SEX

  @Prop(Number)
  id!: number

  @Prop(String)
  name!: string

  @Prop(Number)
  age!: number

  @Prop({
    type: Number,
    default: 1
  })
  sex!: number

  // 1. 接收自定义事件
  @Emit()
  // 会接收 chang-user-age 事件名
  changUserAge() {}

  // 2. 接收自定义事件  换名
  // @Emit('chang-user-age')
  // 会接收 chang-user-age 事件名 直接 跟 x 函数合并
  // x() {}
}
</script>

<style scoped>
</style>