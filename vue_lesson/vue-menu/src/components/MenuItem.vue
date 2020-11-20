<template>
  <el-submenu v-if="menu.children" :index="menu.id.toString()">
    <template slot="title">
      <!-- /cart -->
      <!-- /cart/cartlist -->
      <router-link tag="a" :to="{ name: menu.auth }">
        <span>{{ menu.name }}</span>
      </router-link>
    </template>
    <template v-for="(menu, index) in menu.children">
      <!-- 如果 item 接收的 menu 对象内有 children 的话，需要继续循环自己，没有的话什么都不做 -->
      <MenuItem :menu="menu" :key="index" />
    </template>
  </el-submenu>
  <el-menu-item v-else :index="menu.id.toString()">
    <router-link tag="a" :to="{ name: menu.auth }">
      <span>{{ menu.name }}</span>
    </router-link>
  </el-menu-item>
</template>
<script>
export default {
  name: 'MenuItem',
  props: ['menu']
}
</script>
<style></style>