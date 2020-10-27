<template>
  <div>
    <h3>我是父组件 2</h3>
    <p>展示 store 内共享的数据: {{ num }}</p>
    <div v-if="arr.length">
      <div v-for="item in arr" :key="item">{{ item }}</div>
    </div>
    <div v-else>稍等...</div>
    <h4>我的子组件</h4>
    <Son2 :obj="obj" />
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import Son2 from './Son2'
export default {
  name: 'Parent2',
  components: {
    Son2
  },
  // mapState 的作用就是将 store 内的某些数据映射成组件的 computed
  // mapState 函数会返回一个对象，对象内是想要的计算属性
  data() {
    return {
      a: 10,
      obj: {
        name: '测试',
        age: 10
      }
    }
  },
  computed: {
    // num() {
    //   return this.$store.state.num
    // },
    // arr() {
    //   return this.$store.state.arr
    // }
    // mapState 数组语法
    // ...mapState(['num', 'arr'])
    // mapState 对象语法
    // 第一种对象写法
    // ...mapState({
    //   number: 'num',
    //   array: 'arr'
    // })
    // 第二种对象写法
    ...mapState({
      // 可以将属性值写成一个函数，该函数默认接收 state 作为参数，让函数返回自己需要的 state 即可
      // 这个函数也可以写成普通函数和箭头函数的区别在于普通函数内可以使用 this，箭头函数内不可以
      // 这个新的计算属性需要用到 store 内的和组件内局部 的 data 时需要定义成普通函数
      num(state) {
        return state.num + this.a
      },
      arr: 'arr'
    })
  },
  created() {
    // 触发 store 内的 getArr mutation
    // setTimeout(() => {
    //   // this.$store.commit({
    //   //   type: 'updateArr',
    //   //   res: [1, 2, 3]
    //   // })
    //   this.updateArr({ res: [25, 42, 30] })
    // }, 1000)
    // 只需要触发 action 即可
    // this.$store.dispatch('updateArr')
    // 触发 action 也可以写成
    this.$store.dispatch({
      type: 'updateArr',
      // 随便测试了个参数  id
      id: 1
    })
  },
  methods: {
    // 只能映射成 methods 才带 commit 功能
    // 其他地方想要使用 使用 this 获取
    ...mapMutations(['updateArr'])
  }
}
</script>
<style></style>