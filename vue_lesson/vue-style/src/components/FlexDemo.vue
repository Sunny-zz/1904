<template>
  <div>
    <h3>学习使用 flex 布局方式给页面排版布局</h3>
    <!-- flex 是一种弹性盒子布局方式 -->
    <!-- 抛弃原来的 float 布局方式 -->
    <!-- float、clear和vertical-align 禁止使用 -->
    <!-- flex 核心 -->
    <!-- 容器:   设置了 display:flex; 的元素就是容器 -->
    <!-- 容器的轴线: 分横向和纵向，默认主轴线是横轴 -->
    <!-- 项目:   display:flex; 的子元素就是项目,项目并不会超出盒子，而且项目按照容器的主轴线排列，项目会自动转化为块元素,项目如果没有设置副轴高度默认和容器的高度一致 -->
    <div class="wrap">
      <span class="a"></span>
      <span class="b"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FlexDemo'
}
</script>
<style>
.wrap {
  width: 200px;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  height: 200px;
}
.a {
  /* width: 80%; */
  background-color: #ccc;
  height: 400px;
}
.b {
  /* width: 40%; */
  background-color: teal;
  height: 300px;
}
</style>