<template>
  <Caontainer>
    <template #head>
      <div class="tabs">
        <span>全部</span>
        <span>精华</span>
        <span>分享</span>
        <span>问答</span>
        <span>招聘</span>
      </div>
    </template>
  </Caontainer>
</template>
<script>
import Caontainer from '../lauout/Container'
export default {
  components: {
    Caontainer
  }
}
</script>
<style lang="stylus">
 .tabs 
    display flex
    span 
      display block
      padding 4px
      border-radius 3px
      margin-right 15px 
      font-size 14px  
</style>