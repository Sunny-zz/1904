<template>
  <div>
    <Header />
    <router-view></router-view>
  </div>
</template>
<script>
import Header from './components/Header'

// 79b3b12e-9631-467b-9210-c68449c98a35
export default {
  components: {
    Header
  }
}
</script>