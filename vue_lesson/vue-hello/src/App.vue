<template>
  <!-- <div class="box"> -->
  <!-- <button>x</button> -->
  <!-- <img src="./assets/logo.png" alt /> -->
  <!-- </div> -->
  <div class="wrap">
    <Header />
    <Main />
  </div>
</template>

<script>
import Header from './components/Header'
import Main from './components/Main'
// 在组件内js部分必须默认导出一个对象，而且该对象下一般必须设置一个属性 name 属性值可以和组件名一致，不能和 html 标签命名冲突
export default {
  name: 'App',
  // 组件注册
  components: {
    // Header: Header,
    Header,
    Main,
  },
}
</script>

<style>
/* scoped 的作用就是给该组件的所有标签加上一个随机属性(和所有组件都不同)，所有选择器都添加上了该属性的属性选择器*/
/* 那么加了 scoped 属性的样式就变成了私有样式了 */
.box {
  width: 300px;
  height: 200px;
  background-color: #ccc;
  background-image: url('./assets/logo.png');
}
</style>
