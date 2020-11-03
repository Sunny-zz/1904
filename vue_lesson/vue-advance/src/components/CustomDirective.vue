<template>
  <!-- <div v-html="htmlStr"></div> -->
  <div>
    <h2>自定义指令</h2>
    <input v-focus:haha.a='10 > 5 ? true : false' type="text">
    <br>
    <button v-my-click.once='handleClick'  >测试自定义的点击事件指令</button>
  </div>
</template>
<script>
export default {
  name: 'CustomDirective',
  data() {
     return {
      // htmlStr: '<span>123</span>'
    }
  },
  // 注册组件内的局部指令，只有该组件内使用
  // directives: {
  //   focus: {
  //     inserted(el){
  //       el.focus()
  //     }
  //   }
  // }
  methods: {
    handleClick() {
      console.log('事件触发了');
    }
  },
};
</script>
<style></style>