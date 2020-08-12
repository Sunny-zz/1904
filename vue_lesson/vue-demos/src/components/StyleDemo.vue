<template>
  <div>
    <h2>组件样式处理</h2>
    <!-- 1. style 行内样式处理 -->
    <!-- 2. class 样式处理 -->
    <!-- 古老的修改 style 方案 -->
    <!-- <div
      :style="`background-color: ${isActive ? '#00b3d4' : '#ccc'}`"
      class="box"
    ></div>-->
    <!-- 古老的修改 class 方案 -->
    <!-- <div :class="`box ${isActive ? 'active' : ''}`"></div> -->
    <!-- 官方提供的 style 方案 -->
    <!-- 1. style 对象表示法,有点像之前 jquery 的 css 的修改多个样式方法 -->
    <!-- <div
      :style="{ 'background-color': isActive ? '#00b3d4' : '#ccc' }"
      class="box"
    ></div>-->
    <!-- 2. style 数组表示法 不推荐使用 比较麻烦不好用 -->
    <!--  官方提供的 class 方案 -->
    <!-- 1. 对象表示法  -->
    <!-- <div :class="{ box: true, active: isActive }"></div> -->
    <!-- 2. 数组表示法 我用的比较多-->
    <!-- <div :class="['box', isActive ? 'active' : '']"></div> -->
    <!-- 数组表示法可以和对象向表示法嵌套 我用的比较多-->
    <div :class="['box', { active: isActive }]"></div>
  </div>
</template>

<script>
export default {
  name: 'StyleDemo',
  data() {
    return {
      isActive: false
    }
  }
}
</script>

<style>
.box {
  width: 200px;
  height: 200px;
  background-color: #ccc;
}
.active {
  background-color: #00b3d4;
}
</style>
