<template>
  <div>
    <h3>在 vue 中使用 swiper</h3>
    <SwiperDemo />
    <hr />
    <h3>在 vue 中使用 echarts</h3>
    <EchartsDemo />
  </div>
</template>
<script>
// 在 vue 项目中安装依赖(包) 分两类
// 1. 项目必须(运行)依赖(axios vue-router element-ui ...)       项目没有这个包不可能运行     --save  -S
// 2. 项目开发依赖(sass less stylus ...)                  工具类的(编译工具,插件类辅助工具)   --save-dev   -D

// 安装包的方式目前来说会影响项目成品的大小
import SwiperDemo from './components/SwiperDemo'
import EchartsDemo from './components/EchartsDemo'
export default {
  name: 'App',
  components: {
    SwiperDemo,
    EchartsDemo
  }
}
</script>
<style></style>