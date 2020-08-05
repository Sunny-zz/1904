<template>
  <header>
    111
    <!-- 只要是在 template 想要使用 js 的话都遵循两个语法 -->
    <!-- 父组件传递给子组件内容的时候是通过使用 html 属性的形式传递的，那么默认属性传递的值只能是字符串 -->
    <!-- 模板语法   v-bind    {{}} -->
    <Button :isActive="true" value="danger" />
    <span>成绩: {{number}}</span>
    <br />
    <!-- 事件函数如何传递参数 -->
    <button @click="function(event){handleClick(10,event)}">修改上面的成绩</button>
    <!-- <button @click="handleClick(10)">修改上面的成绩</button> -->
  </header>
</template>

<script>
import Button from './Button'
export default {
  name: 'Header',
  components: {
    Button,
  },
  data: function () {
    return {
      number: 180,
    }
  },
  // Cannot set property 'number' of undefined"
  // methods 内的方法一般只能设置成普通函数，因为要用到 this 关键字
  //
  methods: {
    handleClick: function (value, event) {
      console.log(event)

      this.number = value
      // this 指的是组件实例，指的就是这个组件本身
      // 我们可以直接通过 this 能访问到  组件的 data methods  props ...
    },
    // 对应的第二种 event 方式
    // handleClick: function (value) {
    //   console.log(event)

    //   this.number = value

    // },
  },
}
</script>

<style>
header {
  width: 100%;
  height: 200px;
  background-color: #ccc;
}
</style>
