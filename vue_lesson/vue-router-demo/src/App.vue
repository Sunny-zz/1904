<template>
  <div>
    <!-- <h2>vue 路由实现多页 vue-router</h2> -->
    <!-- 该组件展示的就是路由(页面) 路由的匹配规则要根据当前页面地址和路由的 path 进行匹配 匹配规则是完全匹配-->
    <ul>
      <!-- 路由的跳转需要使用 router-link 组件,默认 router-link 组件就默认解析成 a 标签-->
      <li><router-link to="/">home</router-link></li>
      <li><router-link to="/about">about</router-link></li>
      <li><router-link to="/company">company</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>
<style></style>
