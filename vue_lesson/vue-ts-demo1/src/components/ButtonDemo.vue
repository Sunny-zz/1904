<template>
  <!-- <button>{{ text }}</button> -->
  <button @click="add">{{ count }}</button>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'

// @Component 装饰器是装饰 ButtonDemo class 类的
// 这个装饰器启用了 类里面的装饰器 才可用
@Component({
  // 组件的生命周期钩子函数 写在 @Component 装饰器内
  created() {
    window.console.log('我是 created 生命周1期')
    setTimeout(() => {
      this.add()
    }, 1000)
  },
  mounted() {
    window.console.log('我是 mounted 生命周期')
  }
})
export default class ButtonDemo extends Vue {
  // Prop 装饰器可以获取 父组件传递的 props
  // @Prop 装饰的是后面或者下一行的属性或方法
  // @Prop(String)
  // text: string
  // @Prop({
  //   type: String,
  //   default: '按钮'
  // })
  // 如果 text 提示错误，并不是代码不能正常运行  提示 Property 'text' has no initializer and is not definitely assigned in the constructor.Vetur  原因就是 text 没有初始化并且也没有在 constructor 内赋值。
  // 1. 直接在 text 后面加一个 !    2. 给text 声明一个联合类型  string | undefined
  // text: string
  @Prop(Number)
  count: number

  // handleClick() {
  //   // 自己组件的事
  //   this.$emit('add')
  // }
  // @Emit 装饰器 可以接收父组件传递的事件，而且这个方法内可以写一些语句，这个方法会和父组件传递的 事件合并
  @Emit()
  add() {
    window.console.log(1111)
  }
}
</script>