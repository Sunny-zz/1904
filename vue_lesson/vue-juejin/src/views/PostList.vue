<template>
  <div v-if="list.length">文章列表</div>
  <div v-else>稍等</div>
</template>
<script>
// 我们要根据地址栏的信息判断当前要展示的文章列表的类别
//  vue-router 提供了一些方案获取地址栏的信息
//  $route  代表当前配到的路由的信息
//  $router 代表整个 vue 的路由实例信息，也就是自己创建的路由实例
export default {
  name: "PostList",
  data() {
    return {
      list: []
    };
  },
  watch: {
    // 侦听器监听的不一定是 data 也可以是该组件内的各种信息 data  props  $route 。。。 计算属性也一样
    $route: {
      handler(newValue) {
        console.log(newValue.params.type);
        setTimeout(() => {
          console.log("更新文章数据");
          this.list = [1, 2, 3];
        }, 500);
      },
      immediate: true
    }
  }
  // created() {
  //   // 当前的 PostList 组件作为动态组件，当动态页面之间进行切换的时候组件并不会销毁而是一直存在的
  //   console.log(this.$route);
  //   // 根据获取到的类别向后台发送请求获取对应的数据展示 文章列表
  // },
  // 只要在分别点击 推荐 前端 和后端链接的时候控制台输出对应类别

  // [{id: '1dsad',type: 'frontend',isRecommended: true,....},{id: '1dsad',type: 'backend',isRecommended: false,...}]
};
</script>
<style></style>
