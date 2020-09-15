<template>
  <div>
    <button @click="show = !show">切换</button>
    <div v-show="show" class="box"></div>
  </div>
</template>
<script>
export default {
  name: 'About',
  data() {
    return {
      show: true
    }
  }
}
</script>
<style>
.box {
  width: 200px;
  height: 200px;
  background-color: #ccc;
}
</style>
