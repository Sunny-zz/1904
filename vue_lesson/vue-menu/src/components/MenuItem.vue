<template>
  <el-submenu :index="menu.id.toString()">
    <template slot="title">
      <span>{{ menu.name }}</span>
    </template>
    <template v-for="(menu, index) in menu.children">
      <el-menu-item
        v-if="!menu.children"
        :key="index"
        :index="index.toString()"
      >
        {{ menu.name }}
      </el-menu-item>
      <MenuItem :menu="menu" :key="index" v-else />
    </template>
  </el-submenu>
</template>
<script>
export default {
  name: 'MenuItem',
  props: ['menu']
}
</script>
<style></style>