<template>
  <div>
    <h3>我是父组件 1</h3>
    <p>展示 store 内共享的数据: {{ num }}</p>
    <button @click="add">修改</button>
    <button @click="change">修改成固定值 10000</button>
  </div>
</template>
<script>
import store from '../store'
export default {
  name: 'Parent1',
  // created() {
  //   console.log(this.$store.state.num)
  // }
  computed: {
    num() {
      return this.$store.state.num
    }
  },
  methods: {
    add() {
      // this.$store.state.num = 1000
      // 上述操作可以修改 store 内的数据但是绝对不能使用，就和我们之前说的当 props 是对象的时候子组件不要直接修改，这样修改了之后追踪不到修改的来源
      // 想要修改 store 内的数据，必须使用 commit 来触发 mutation 函数
      // 如何获取 commit ，如何通过 commit 触发 mutation
      // 1. 在组件内直接导入 store ,store 内默认就有 commit 方法
      store.commit('add')
    },
    change() {
      // store.commit('change', {
      //   num1: 10,
      //   num2: 100
      // })
      // 对象形式提交 mutation
      store.commit({
        // type 代表 mutation 方法名
        type: 'change',
        newNum: 1
      })
    }
  }
}
</script>
<style></style>