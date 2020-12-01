<template>
  <header>
    <div class="inner">
      <router-link to="/"
        ><img src="https://vue-js.com/public/images/vue.png" alt=""
      /></router-link>
      <div v-if="!userInfo" class="login-box">
        <el-input v-model="token" placeholder="请输入 token"></el-input>
        <el-button size="mini" @click="login">登录</el-button>
      </div>
      <div v-else class="logout-box">
        <img :src="userInfo.avatar_url" alt="" />
        <el-button size="mini" @click="logout">退出</el-button>
      </div>
    </div>
  </header>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      token: '79b3b12e-9631-467b-9210-c68449c98a35'
    }
  },
  created() {
    // 干什么
    const token = localStorage.getItem('token')
    if (token) {
      this.getUserInfo(token)
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    ...mapActions(['getUserInfo']),
    async login() {
      // 将用户输入的 token 发送至后台
      const { token } = this
      if (token.trim()) {
        await this.getUserInfo(token)
        // console.log('1')
        if (this.$route.path !== '/') {
          this.$router.push('/')
        }
      }
    },
    logout() {
      this.$store.commit('getUserInfo', null)
      localStorage.removeItem('token')
      if (this.$route.path !== '/') {
        this.$router.push('/')
      }
    }
  }
}
</script>
<style lang='stylus'>
  header 
    background-color #1c6132
    .inner
      width 1200px
      height 60px
      margin 0 auto
      display flex
      align-items center
      > a img 
        width 50px
        margin-right 120px
      .login-box 
        display flex
        align-items center
        height 60px
        .el-input
          width 250px 
          height 36px
          margin-right 20px
          input 
            height 36px
      .logout-box 
        display flex
        align-items center
        height 60px
        img 
          width 50px
          margin-right 20px
        
</style>

