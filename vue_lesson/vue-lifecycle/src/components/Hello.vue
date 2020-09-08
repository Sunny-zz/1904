<template>
  <div>
    <h2>子组件</h2>
    <div>父组件传递的prop{{text}}</div>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  props: ['text'],
  // computed: {
  //   reverseText() {
  //     return this.text.split('').reverse().join('')
  //   }
  // },
  beforeCreate() {
    console.log('子组件的 beforCreate')
  },
  created() {
    console.log('子组件的 created')
  },
  beforeMount() {
    console.log('子组件的 beforeMount')
  },
  mounted() {
    console.log('子组件的 mounted')
  },
  // 由于子组件接收了父组件的 prop 并且父组件的 prop 被修改了，那么子组件的两个更新的生命周期就会执行
  beforeUpdate() {
    console.log('子组件的 beforeUpdate')
  },
  updated() {
    console.log('子组件的 updated')
  }
}
</script>

<style></style>
