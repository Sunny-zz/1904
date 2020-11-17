<template>
  <el-submenu :index="menu.auth">
    <template slot="title">
      <!-- <router-link :to="{ name: menu.auth }"> {{ menu.name }}</router-link> -->
      {{ menu.name }}
    </template>
    <template v-for="(child, index) in menu.children">
      <el-menu-item v-if="!child.children.length" :key="index">
        <router-link :to="{ name: child.auth }"> {{ child.name }}</router-link>
      </el-menu-item>
      <!-- 如果有儿子继续递归组件 -->
      <ResubMenu :menu="child" v-else :key="index"></ResubMenu>
    </template>
  </el-submenu>
</template>
<script>
export default {
  name: 'ResubMenu',
  props: {
    menu: {}
  }
}
</script>