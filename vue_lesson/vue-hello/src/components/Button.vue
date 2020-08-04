<template>
  <!-- 当 js 内的内容需要写在 template 中 -->
  <!-- 1. 在双尖括号之间 使用 {{text}} -->
  <!-- 2. 在标签的属性内使用需要将属性写成 v-bind:style='`backgroung-color: ${color}`'  引号内就是可以写 js 语法了 -->
  <!-- 语法就是 v-bind:属性名='这里面直接写js(只能是值或者运算不能是语句)即可'  v-bind: 可以简写成 : -->
  <!-- <button :style="`background-color: ${color}`" class="btn ">{{text}}</button> -->
  <!-- isActive 如何应用 -->
  <!-- <button :class="`btn ${isActive ? 'color' : ''}`">{{ text }}</button> -->
  <button :class="isActive ? 'btn color' : 'btn'">{{ text }}</button>
</template>

<script>
// 可以负责展示不同的文字内容
// 那么就将这个不同的内容设置成 props 让父组件传递
export default {
  name: "Button",
  // 接受的时候使用字符串  数组方式
  // props: ["text", "isActive"]
  // 对象方式 高级可以做简单的校验
  props: {
    text: {
      //  可以设置属性的类型和默认值
      type: String,
      default: "default button"
    },
    isActive: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style>
.btn {
  padding: 10px 40px;
  border-radius: 10px;
  background-color: #fff;
  font-size: 20px;
  text-align: center;
  border: 0;
  outline: 0;
  cursor: pointer;
  display: block;
}
.color {
  background-color: #00f;
}
</style>
