<template>
  <div>
    <Parent />
    <Parent1 />
    <!-- 当给某个组件传递 props 的时候  所有 props 除了 class 和 style 之外，都会直接存储到组件的 $attrs 属性内 -->
    <Parent2 :a="10" :obj="{ name: '小花儿' }" @x="() => console.log(1)" />
  </div>
</template>
<script>
// vue 组件间的通信
// 父子
// props  $parent    自定义事件    .sync  v-model   provide/inject   $attrs  $listeners
// 子父  $children
import Parent from './components/Parent'
import Parent1 from './components/Parent1'
import Parent2 from './components/Parent2'
export default {
  name: 'App',
  components: {
    Parent,
    Parent1,
    Parent2
  }
}
</script>
<style></style>