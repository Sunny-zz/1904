<template>
  <div style="padding: 20px; border: 1px solid #ccc; margin-bottom: 100px">
    <div>我自己的</div>
    <!-- 父组件接收到的所有 props 除了 class 和 style 之外的，想要全部传递给子组件 -->
    <Son2 v-bind="$attrs" v-on="$listeners" />
    
  </div>
</template>
<script>
import Son2 from './Son2'
export default {
  name: 'Parent2',
  components: {
    Son2
  },
  created() {
    console.log(this.$attrs)
    console.log(this.$listeners)
  }
}
</script>
<style></style>