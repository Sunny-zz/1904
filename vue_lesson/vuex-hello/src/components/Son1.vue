<template>
  <div>
    <h5>我是儿子1</h5>
    <!-- 我要展示 store 内的数据 arr 的求和结果 -->
    <div>{{ sum }}</div>
    <div>展示某个限定的数: 和30最接近的数 ---> {{ getNum(30) }}</div>
  </div>
</template>
<script>
// import sum from '../common/sum'
// 获取 store 内 计算属性可以借助 vuex 的 mapGetters 辅助函数
import { mapGetters } from 'vuex'
export default {
  name: 'Son1',
  computed: {
    // sum() {
    //   // return sum(this.$store.state.arr)
    //   return this.$store.getters.sum
    // },
    // limitNum() {
    //   return this.$store.getters.getNum(30)
    // }
    ...mapGetters(['sum', 'getNum'])
    // ...mapGetters({
    //   res: 'sum',
    //   limitNum: 'getNum'
    // })
  }
}
</script>
<style></style>