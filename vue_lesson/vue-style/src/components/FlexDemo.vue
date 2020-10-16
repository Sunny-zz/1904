<template>
  <div>
    <h3>学习使用 flex 布局方式给页面排版布局</h3>
    <!-- flex 是一种弹性盒子布局方式 -->
    <!-- 抛弃原来的 float 布局方式 -->
    <!-- float、clear和vertical-align 禁止使用 -->
    <!-- flex 核心 -->
    <!-- 容器:   设置了 display:flex; 的元素就是容器 -->
    <!-- 容器的属性:  flex-direction    flex-wrap    flex-flow   justify-content  align-items  align-content -->
    <!-- 容器的轴线: 分横向和纵向，默认主轴线是横轴 -->
    <!-- 项目:   display:flex; 的子元素就是项目,项目在主轴线并不会超出盒子，而且项目按照容器的主轴线排列，项目会自动转化为块元素,项目如果没有设置副轴高度默认和容器的高度一致 -->
    <!-- 项目的属性  -->
    <!-- order  flex-grow  flex-shrink  flex-basia flex  align-self-->
    <div class="wrap">
      <span class="a">1a</span>
      <span class="b">2b</span>
      <span class="c">3c</span>
      <span class="d">4d</span>
    </div>
    <hr />
    <div class="box1">
      <div class="box2"></div>
      <div class="box3"></div>
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
  width: 800px;
  border: 1px solid red;
  display: flex;
  /* flex-direction: row-reverse; */
  /* flex-wrap: wrap; */
  /* flex-wrap: wrap-reverse; */
  /* flex-flow: row wrap-reverse; */
  height: 200px;
  justify-content: space-between;
  /* align-items 是控制项目在副轴的排列顺序，如果项目没有设置副轴方向上的大小原本是和容器副轴大小一致，设置了 align-items 项目的大小就是项目本身内容的大小 */
  align-items: baseline;
}
.a {
  width: 50%;
  background-color: #ccc;
  height: 150px;
  order: 10;
}
.b {
  width: 50%;
  background-color: teal;
  height: 150px;
  order: 3;
  flex-grow: 3;
  flex-shrink: 0;
}
.c {
  width: 50%;
  background-color: #00b3d4;
  height: 150px;
  font-size: 30px;
  flex-grow: 1;
  align-self: flex-end;
}
.d {
  width: 50%;
  background-color: rgb(99, 235, 117);
  font-size: 12px;
  height: 150px;
}
.box1 {
  width: 800px;
  height: 400px;
  background-color: #ccc;
  border: 1px solid #ccc;
  display: flex;
}
.box2 {
  /* width: 200px; */
  height: 200px;
  background-color: red;
  flex-basis: 300px;
  flex-grow: 1;
}
.box3 {
  width: 300px;
  height: 200px;
  background-color: blue;
}
</style>