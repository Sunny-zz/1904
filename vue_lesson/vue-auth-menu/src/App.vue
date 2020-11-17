<template>
  <div>
    <router-view></router-view>
    <Menu />
  </div>
</template>
<script>
import Menu from './components/Menu'
export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>
<style></style>