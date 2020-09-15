<template>
  <div id="app">
    <div id="nav">
      <!-- router-link 的激活匹配方案是包含匹配 -->
      <!-- 使用默认的激活类名 -->
      <router-link to="/" exact>Home</router-link> |
      <router-link to="/pins">Pins</router-link>
      <!-- active-class 设置激活的类名 -->
      <!-- <router-link to="/" active-class="active" exact>Home</router-link> |
      <router-link to="/pins" active-class="active" >Pins</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<style>
#app a {
  text-decoration: none;
  color: #000;
}
#app .router-link-active {
  color: #007fff;
}

/* #app .active {
  color: #007fff;
} */
</style>
