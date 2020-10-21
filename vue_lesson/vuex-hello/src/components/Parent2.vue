<template>
  <div>
    <h3>我是父组件 2</h3>
    <p>展示 store 内共享的数据: {{ num }}</p>
  </div>
</template>
<script>
export default {
  name: 'Parent2',
  computed: {
    num() {
      return this.$store.state.num
    }
  }
}
</script>
<style></style>