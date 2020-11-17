<template>
  <div id="app">
    <Menu :menuTree="menuTree" />
  </div>
</template>

<script>
import Menu from './components/Menu'
export default {
  name: 'app',
  components: {
    Menu
  },
  created() {
    this.$store.dispatch('getMenu')
  },
  computed: {
    menuTree() {
      return this.$store.state.menuTree
    }
  }
}
</script>

<style>
</style>
