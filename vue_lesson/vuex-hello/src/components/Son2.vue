<template>
  <div>
    <h5>我是儿子2</h5>
    <!-- 我要展示 store 内的数据 arr 的求和结果 -->
    <div>{{ sum }}</div>
  </div>
</template>
<script>
export default {
  name: 'Son2',
  computed: {
    sum() {
      // return this.$store.state.arr.reduce((res, ele) => (res += ele), 0)
      return this.$store.getters.sum
    }
  }
}
</script>
<style></style>