<template>
  <div>
    <h2>测试 mixin</h2>
  </div>
</template>
<script>
import helloMixin from '../mixins/hello'
export default {
  name: 'MixinDemo1',
  mixins: [helloMixin]
  
};
</script>
<style></style>