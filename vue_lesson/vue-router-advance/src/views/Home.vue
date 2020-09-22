<template>
  <div class="home">
    <img @click="back" alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  methods: {
    back() {
      this.$router.back()
    }
  }
}
</script>
<style>
.home {
  height: 2000px;
}
</style>
