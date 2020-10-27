<template>
  <div>
    <h5>我是儿子2</h5>
    <!-- 我要展示 store 内的数据 arr 的求和结果 -->
    <div>{{ sum }}</div>
    <h5>测试异步mutation</h5>
    <div>{{ testNum }}</div>
    <button @click="change">更新</button>
    <h5>测试 props 直接修改</h5>
    <div>{{ obj }}</div>
    <button @click="changeObj">更新obj</button>
  </div>
</template>
<script>
export default {
  name: 'Son2',
  props: ['obj'],
  computed: {
    sum() {
      // return this.$store.state.arr.reduce((res, ele) => (res += ele), 0)
      return this.$store.getters.sum
    },
    testNum() {
      return this.$store.state.testNum
    }
  },
  methods: {
    change() {
      this.$store.commit({
        type: 'changeTestNum',
        newNum: 200
      })
    },
    // 不推荐
    changeObj() {
      this.obj.name = '修改了'
    }
  }
}
</script>
<style></style>