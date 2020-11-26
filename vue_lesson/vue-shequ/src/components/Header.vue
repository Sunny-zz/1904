<template>
  <header>
    <div class="inner">
      <img src="https://vue-js.com/public/images/vue.png" alt="" />
      <div class="login-box">
        <el-input></el-input>
        <el-button size="mini">登录</el-button>
      </div>
      <div class="logout-box">
        <img src="https://vue-js.com/public/images/vue.png" alt="" />
        <el-button size="mini">退出</el-button>
      </div>
    </div>
  </header>
</template>

<style lang='stylus'>
  header 
    background-color #1c6132
    .inner
      width 1200px
      height 60px
      margin 0 auto
      display flex
      align-items center
      > img 
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

