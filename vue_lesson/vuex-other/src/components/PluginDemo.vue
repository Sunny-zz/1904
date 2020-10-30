<template>
  <div>
    <h4>使用 logger 插件</h4>
    <div>store内的数据count: {{ count }}</div>
    <button @click="add">count ++</button>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'PluginDemo',
  computed: {
    ...mapState(['count'])
  },
  methods: {
    ...mapMutations(['add'])
  }
}
</script>
<style></style>