<template>
  <div class="less-demo">
    <div>
      <h3>在 vue 中使用 less 语法写样式</h3>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LessDemo'
}
</script>
<style lang="less">
// 需要安装 less-loader 和 less 基础用法和 scss 一样
@color: red;
.less-demo {
  h3 {
    // color: teal;
    color: @color;
  }
}
</style>
