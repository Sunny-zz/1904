<template>
  <header>
    <!-- router-link 的激活匹配方案是包含匹配 -->
    <!-- 使用默认的激活类名 -->
    <span @click="goHome" class="logo"
      ><img
        src="https://s3.pstatp.com/toutiao/xitu_juejin_web/img/logo.a7995ad.svg"
        alt=""
    /></span>
    <router-link
      to="/"
      :class="$route.path !== '/feidian' ? 'router-link-active' : ''"
      exact
      >首页</router-link
    >
    <router-link to="/feidian">沸点</router-link>
    <!-- active-class 设置激活的类名 -->
    <!-- <router-link to="/" active-class="active" exact>Home</router-link> |
      <router-link to="/pins" active-class="active" >Pins</router-link> -->
  </header>
</template>
<script>
// 1-->4
// 2-->4
// 3-->4
// 第四页的返回按钮怎写  this.$router.back()
export default {
  name: "Header",
  methods: {
    goHome() {
      console.log(this.$router);
      // this.$router.push("/backend?sort=newest");
      // query 是查询  params 是动态参数
      // this.$router.push({ path: "/backend", query: { sort: "newest" } });
      this.$router.push({
        name: "postlist",
        params: { type: "backend" },
        query: { sort: "newest" }
      });
    }
  }
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
  float: left;
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
