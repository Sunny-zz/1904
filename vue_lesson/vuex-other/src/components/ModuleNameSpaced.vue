<template>
  <div>
    <h4>vuex 内的模块设置命名空间</h4>
    <div>展示带命名空间的 state: {{ num }}</div>
    <button @click="changeNum1(500)">直接通过模块内的 mutation 修改</button>
    <button @click="changeNum(1000)">
      直接通过模块内的 action 触发 mutation 修改
    </button>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: 'ModuleNameSpaced',
  computed: {
    ...mapState({
      num: (state) => {
        // console.log(state)
        return state.a.number
      }
    })
  },
  methods: {
    ...mapMutations('a', {
      changeNum1: 'changeNum'
    }),
    ...mapActions(['changeNum'])
  }
}
</script>
<style></style>