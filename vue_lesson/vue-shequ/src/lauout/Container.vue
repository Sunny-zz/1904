<template>
  <!-- 布局的容器组件 -->
  <div class="container">
    <div v-if="$slots.head" class="container-head">
      <slot name="head"></slot>
    </div>
    <div class="container-content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="stylus">
.container 
  width 960px
  border-radius 5px
  border 1px solid #ccc
  margin 30px auto
  .container-head 
    background-color #f6f6f6
    padding 10px
    border-bottom 1px solid #ccc
</style>