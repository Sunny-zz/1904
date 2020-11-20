<template>
  <div>
    <el-input v-model="name" placeholder="请输入职位"></el-input>
    <el-button @click="login">登录</el-button>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      name: ''
    }
  },
  methods: {
    async login() {
      if (this.name.trim()) {
        // 点击登录按钮的时候向后台发送请求，  1. 要登录   2.获取权限
        await this.$store.dispatch('getMenu', this.name)
        this.$router.push('/')
      }
    }
  }
}
</script>
<style></style>