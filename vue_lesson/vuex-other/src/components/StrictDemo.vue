<template>
  <div>
    <h4>测试 vuex 的严格模式</h4>
    <div>
      <span>姓名: {{ obj.name }}</span
      ><br />
      <span>年龄: {{ obj.age }}</span>
      <br />
      <button @click="updateName">修改姓名</button>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'StrictDemo',
  computed: {
    ...mapState(['obj'])
  },
  methods: {
    updateName() {
      this.obj.name = '猴子'
    }
  }
}
</script>
<style></style>