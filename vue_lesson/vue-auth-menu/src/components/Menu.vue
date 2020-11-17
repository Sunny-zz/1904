<template>
  <el-menu>
    <template v-for="(child, index) in $store.state.menuList">
      <ResubMenu :menu="child" :key="index"></ResubMenu>
    </template>
  </el-menu>
</template>
<script>
import ResubMenu from './ResubMenu'
export default {
  name: 'Menu',
  components: {
    ResubMenu
  }
}
</script>
<style></style>