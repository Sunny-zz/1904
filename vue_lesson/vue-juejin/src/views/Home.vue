<template>
  <div class="home">
    <ul>
      <li>
        <!-- 下面的 :class 相当于给 router 又加上了一个激活的样式规则  -->
        <router-link
          :class="$route.path === '/' ? 'router-link-active' : ''"
          to="/recommended"
          >推荐</router-link
        >
      </li>
      <li>
        <router-link to="/frontend">前端</router-link>
      </li>
      <li>
        <router-link to="/backend">后端</router-link>
      </li>
    </ul>
    <!-- 文章列表,所有的文章列表布局和样式都一样只不过是数据发生了变化 -->
    <!-- 这种情况我们通常会用一个组件表示，根据不同的数据作展示 -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
<style>
.home > ul {
  list-style: none;
  height: 30px;
  line-height: 30px;
  padding: 0 150px;
  margin: 0;
  background-color: #fff;
  border-top: 1px solid #ccc;
}
.home > ul > li {
  float: left;
  margin-right: 30px;
}
.home > ul > li > a {
  color: #ccc;
  text-decoration: none;
}
.home > ul > li > a.router-link-active {
  color: #007fff;
}
</style>
