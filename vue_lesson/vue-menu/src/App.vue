<template>
  <div id="app">
    <router-view></router-view>
    <div class="btns">
      <button v-if="$store.state.btns.includes('edit')">编辑</button>
      <button v-if="$store.state.btns.includes('add')">添加</button>
      <button v-if="$store.state.btns.includes('delete')">删除</button>
      <button v-auth-btn=""></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  directives: {
    'auth-btn': {
      // 指令的定义
      inserted(el, binding) {
        console.log(el)
        console.log(binding.value)
        if (binding.value) {
          el.innerText = binding.value
        } else {
          el.parentNode.removeChild(el)
        }
      }
    }
  },
  created() {
    // 去本地浏览器获取 sessionStorage
    // console.log(this)
  }
}
</script>

<style>
</style>
