<template>
  <header>
    <!-- router-link 的激活匹配方案是包含匹配 -->
    <!-- 使用默认的激活类名 -->
    <router-link to="/" class="logo"
      ><img
        src="https://s3.pstatp.com/toutiao/xitu_juejin_web/img/logo.a7995ad.svg"
        alt=""
    /></router-link>
    <router-link
      to="/"
      :class="$route.path !== '/pins' ? 'router-link-active' : ''"
      exact
      >首页</router-link
    >
    <router-link to="/pins">沸点</router-link>
    <!-- active-class 设置激活的类名 -->
    <!-- <router-link to="/" active-class="active" exact>Home</router-link> |
      <router-link to="/pins" active-class="active" >Pins</router-link> -->
  </header>
</template>
<script>
export default {
  name: "Header"
};
</script>
<style>
header {
  height: 50px;
  line-height: 50px;
  background-color: #fff;
  padding: 0 100px;
  overflow: hidden;
}
header > .logo {
  margin-right: 50px;
}
header a {
  text-decoration: none;
  color: #000;
  display: block;
  float: left;
  margin-left: 30px;
}
header .router-link-active {
  color: #007fff;
}

/* header .active {
  color: #007fff;
} */
</style>
