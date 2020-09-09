<template>
  <div>
    <h2>我是一个选项卡</h2>
    <div>
      <button
        @click="activeType = 'Home'"
        :class="{ active: activeType === 'Home' }"
      >
        Home
      </button>
      <button
        @click="activeType = 'Posts'"
        :class="{ active: activeType === 'Posts' }"
      >
        Posts
      </button>
      <button
        @click="activeType = 'About'"
        :class="{ active: activeType === 'About' }"
      >
        About
      </button>
    </div>
    <!-- 展示某一个组件 -->
    <!-- 
    <Home v-show="activeType === 'Home'" />
    <Posts v-show="activeType === 'Posts'" />
    <About v-show="activeType === 'About'" /> -->
    <!-- 语法糖 -->
    <!-- 使用 vue 自带的 component 元素加上特殊的 is 属性,简化上面 v-if 的写法 -->
    <!-- 注意 is 属性的属性值必须和组件名相同才能正确展示组件 -->
    <!-- 动态组件 -->
    <!-- <component :is="activeType"></component> -->
    <!-- <component
      :title="title"
      @change-post="changePost"
      :is="activeType"
    ></component> -->
    <!-- $event 就代表子组件传递的参数 -->
    <!-- <component
      :title="title"
      @update:title="title = $event"
      :is="activeType"
    ></component> -->
    <!-- 上述写法的语法糖 -->
    <!-- 子组件内调用传递的事件名必须写成 update:propName -->
    <!-- <component :title.sync="title" :is="activeType"></component> -->
    <!-- 子组件想要修改(同步)父组件的 data ，一般情况是在父组件定义修改方法然后传递给子组件去执行，通过自定义事件方式 -->
    <!-- keep-alive  -->
    <keep-alive include="Posts">
      <component :is="activeType"></component>
    </keep-alive>
  </div>
</template>
<script>
import Home from "./Home";
import Posts from "./Posts";
import About from "./About";
export default {
  name: "Tabs",
  components: {
    Home,
    Posts,
    About
  },
  data() {
    return {
      activeType: "Home"
      // title: ""
    };
  },
  methods: {
    // changePost(newTitle) {
    //   this.title = newTitle;
    // }
  }
};
</script>
<style>
.active {
  color: red;
}
</style>
