<template>
  <div>
    <h1>Home</h1>
    <div>
      <button @click="sub">-</button>
      <span>{{ count }} : {{ num }}</span>
      <button @click="add">+</button>
      <ButtonDemo @add="add" text="默认按钮" :count="count"></ButtonDemo>
      <button @click="test">测试路由的按钮</button>
    </div>
    <hr />
    <div>{{ str }}</div>
    <router-link to="/?tab=all">去全部</router-link> |
    <router-link to="/?tab=ask">去问答</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import ButtonDemo from '../components/ButtonDemo.vue'

// 组件想要和 vuex 做交互，提倡使用 vuex-class 做交互，不直接在 vuex 去取一些辅助方法(mapState ...)
// 还有一个工具 vuex-module-decorators 稍微比上面好用一点
import { State } from 'vuex-class'

// import { Route } from 'vue-router'
// ts 的组件写法  class 语法
// 使用 vue-property-decorator 提供的装饰器 在组件内添加一些属性或方法
// data
// 直接在类里面定义一个公共属性即可
// methods
// 直接在类里面定义公共方法即可
// @Component 装饰器 是一个方法
// 作用1 可以导入子组件
// 作用2 声明生命周期
// 作用3 设置计算属性
@Component({
  // 注册子组件
  components: {
    ButtonDemo
  },
  // 组件的计算属性
  computed: {
    num() {
      return this.count * this.count
    }
  }
})
export default class Home extends Vue {
  $route
  count = 100
  //  @State('str')    去store 中 找到 str  取出来给 组件类内的 str 属性
  @State('str')
  str
  add() {
    this.count++
    window.console.log(222222)
  }
  sub() {
    this.count--
  }
  test() {
    // 直接在事件内访问 $route 编辑器会报错
    // $route 并不存在在我的组件上
    // 直接在 class 内定义一个公共属性 $route
    console.log(this.$route.query)
  }
  // @Watch 侦听器的装饰器
  @Watch('$route.query.tab', { immediate: true })
  onTabChange(newValue: string, oldValue: string) {
    window.console.log(newValue, oldValue)
  }
}
</script>

<style scoped>
</style>