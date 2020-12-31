<template>
  <!-- <div class="box"> -->
  <!-- <button>x</button> -->
  <!-- <img src="./assets/logo.png" alt /> -->
  <!-- </div> -->
  <div class="wrap">
    <Header />
    <Main />
    <div :style="`background-color: ${bgColor}`" class="box"></div>
    <!-- 之前想要点击按钮修改颜色，必须获取真实的 box 的 dom 节点，然后修改 -->
    <!-- 其实上述方案可能会导致浏览的重排和重绘 -->
    <!-- vue 为了解决上述问题使用的 虚拟 dom 的概念 -->
    <!-- 页面的所有的变化必须由组件的 data 的改变而变化 -->
    <!-- 1. 需要将变化对应的内容设置成 data   -->
    <!-- 2. 将 data 应用到页面中，使用的时候就相当于一个变量-->
    <!-- 3. 使用 js 逻辑修改对应的 data 页面自然就会更着变化了 -->
    <!-- <button @click="change" class="change">切换颜色</button> -->
    <!-- 所有vue指令的值的引号内都可以直接写 js 语法 -->
    <!-- @事件类型='事件函数(可以使 methods 内设置的，也可以是直接写的)' -->
    <!-- <button @click="()=>{bgColor = 'blue'}" class="change">切换颜色</button> -->
    <!-- 事件函数内只有修改 data 的操作 那么上述写法可以直接简化成 -->
    <button @click="bgColor = 'blue'" class="change">切换颜色</button>
    <img src="./assets/logo.png" alt="">
  </div>
</template>

<script>
import Header from './components/Header'
import Main from './components/Main'
// 在组件内js部分必须默认导出一个对象，而且该对象下一般必须设置一个属性 name 属性值可以和组件名一致，不能和 html 标签命名冲突
export default {
  name: 'App',
  data: function () {
    return {
      bgColor: 'red',
    }
  },
  // 组件注册
  components: {
    // Header: Header,
    Header,
    Main,
  },
  methods: {
    // 该对象下的属性需要写成函数，这个函数可以直接当作事件函数
    change() {
      this.bgColor = 'blue'
    },
  },
}
</script>

<style>
/* scoped 的作用就是给该组件的所有标签加上一个随机属性(和所有组件都不同)，所有选择器都添加上了该属性的属性选择器*/
/* 那么加了 scoped 属性的样式就变成了私有样式了 */
.box {
  width: 300px;
  height: 200px;
  /* background-color: #ccc; */
}
</style>
