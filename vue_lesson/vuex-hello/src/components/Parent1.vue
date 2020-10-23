<template>
  <div>
    <h3>我是父组件 1</h3>
    <p>展示 store 内共享的数据: {{ num }}</p>
    <button @click="jia">修改</button>
    <button @click="gai({ newNum: 10000 })">修改成固定值 10000</button>
    <h4>我的子组件1</h4>
    <Son1 />
  </div>
</template>
<script>
import { ADD, CHANGE } from '../store/mutation-types'
import { mapMutations } from 'vuex'
import Son1 from './Son1'
// 导入 mapMutations 函数用来辅助组件提交 mutation
// 作用其实就是将 store 内的 mutation 函数映射到组件内，当作组件的 method
// mapMutations 函数调用之后会返回一个对象，对象内存储了一些方法

export default {
  name: 'Parent1',
  // created() {
  //   console.log(this.$store.state.num)
  // },
  components: {
    Son1
  },
  computed: {
    num() {
      return this.$store.state.num
    }
  },
  methods: {
    // add() {
    //   // this.$store.state.num = 1000
    //   // 上述操作可以修改 store 内的数据但是绝对不能使用，就和我们之前说的当 props 是对象的时候子组件不要直接修改，这样修改了之后追踪不到修改的来源
    //   // 想要修改 store 内的数据，必须使用 commit 来触发 mutation 函数
    //   // 如何获取 commit ，如何通过 commit 触发 mutation
    //   // 1. 在组件内直接导入 store ,store 内默认就有 commit 方法
    //   this.$store.commit(ADD)
    // },
    // change() {
    //   // store.commit('change', {
    //   //   num1: 10,
    //   //   num2: 100
    //   // })
    //   // 对象形式提交 mutation
    //   this.$store.commit({
    //     // type 代表 mutation 方法名
    //     type: CHANGE,
    //     newNum: 10000
    //   })
    // }
    // mapMutations 的数组语法
    // ...mapMutations([ADD, CHANGE])
    // 相当于做了下面的事
    // [ADD](payload) {
    //   // 这里面是使用 commit 提交重名的 mutation ADD
    // },
    // [CHANGE](payload) {
    //   // 这里面是使用 commit 提交重名的 mutation CHANGE
    // }
    // mapMutations 的对象语法
    // 主要和数组区分 该用法可以给组件内的方法起名字，不一定要和 mutation 函数名相同
    ...mapMutations({
      jia: ADD,
      gai: CHANGE
    })
  }
}
</script>
<style></style>