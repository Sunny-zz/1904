<template>
  <div>
    <h4>在属于 Vuex 的 state 上使用 v-model</h4>
    <label for="">姓名: </label><input type="text" v-model="objName" />
  </div>
</template>
<script>
// import { mapState } from 'vuex'
export default {
  name: 'VModelDemo',
  computed: {
    // 为什么计算属性不写成 obj 而是写成 objName
    // 因为直接写成 obj 的话，当输入框的值修改的时候，修改的是 obj.name ，obj 并不会发生改变，那么 set 函数并不会触发
    objName: {
      get() {
        return this.$store.state.obj.name
      },
      set(newValue) {
        // 修改 store 内 obj，需要调用 mutation
        // console.log('1111')
        this.$store.commit('changeObjName', newValue)
      }
    }
  }
}
</script>
<style></style>