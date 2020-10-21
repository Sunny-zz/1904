<template>
  <div>
    <h2>vue 的组件通信终极解决办法 vuex</h2>
    <hr />
    <Parent1 />
    <hr />
    <Parent2 />
  </div>
</template>
<script>
import Parent1 from './components/Parent1'
import Parent2 from './components/Parent2'
export default {
  name: 'App',
  components: {
    Parent1,
    Parent2
  }
}
</script>
<style></style>