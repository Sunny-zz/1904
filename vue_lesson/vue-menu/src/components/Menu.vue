<template>
  <el-menu class="el-menu-vertical-demo">
    <!-- <template v-for="(menu, index) in menuTree">
      <el-submenu
        :key="index"
        :index="index.toString()"
        v-if="menu.children && menu.children.length"
      >
        <template slot="title">
          <span>{{ menu.name }}</span>
        </template>
        <Menu
          v-if="menu.children && menu.children.length"
          :menuTree="menu.children"
        />
      </el-submenu>
      <el-menu-item :key="index" :index="index.toString()" v-else>
        <span slot="title">{{ menu.name }}</span>
      </el-menu-item>
    </template> -->
    <template v-for="(item, index) in menuTree">
      <MenuItem :menu="item" :key="index" />
    </template>
  </el-menu>
</template>
<script>
import MenuItem from "./MenuItem";
export default {
  name: "Menu",
  props: ["menuTree"],
  components: {
    MenuItem
  }
};
</script>
<style></style>
