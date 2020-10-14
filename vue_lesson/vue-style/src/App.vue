<template>
  <div class="app">
    <h2>vue 中使用 css 扩展 scss less stylus 语法</h2>
    <!-- <div class="box"></div>
    <hr />
    <Box />
    <hr />
    <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949">
    </el-switch> -->
    <hr />
    <ScssDemo />
    <hr />
    <LessDemo />
    <hr />
    <StylusDemo />
    <hr />
    <FlexDemo />
  </div>
</template>
<script>
// import Box from './components/Box'
import ScssDemo from './components/ScssDemo'
import LessDemo from './components/LessDemo'
import StylusDemo from './components/StylusDemo'
import FlexDemo from './components/FlexDemo'
export default {
  name: 'App',
  components: {
    // Box
    ScssDemo,
    LessDemo,
    StylusDemo,
    FlexDemo
  }
  // data() {
  //   return {
  //     value: false
  //   }
  // }
}
</script>

<style scoped >
/* 如果样式标签内设置了 scoped ，那么该组件的所有标签都会自动加上一个 data-v-xxx 属性，而且该组件设置的所有样式选择器上都会加上该属性的属性选择器 */
/* 实现的功能就是组件样式私有化 */
.box {
  width: 200px;
  height: 200px;
  background-color: #ccc;
}
/* 接下来的所有样式一般都会使用 .app 为前缀 */

/* 当使用了第三方插件库的时候 scoped 属性只会将 插件的组件的最外层标签加上 scoped 设置的属性，那么里面的标签想要使用类名修改样式就不行了 */
/* .el-switch__core:after {
  background-color: #ccc;
} */
/* .el-switch {
  height: 30px;
} */
</style>
