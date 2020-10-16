<template>
  <div class="stylus-demo">
    <h3>在vue中使用 stylus</h3>
    <!-- 暂时不太清楚什么问题 -->
  </div>
</template>
<script>
export default {
  name: 'StylusDemo'
}
// 需要安装 stylus stylus-loader  注意 stylus-loader 最近更新了 4 版本但是 vuecli4 能使用 3 版本，所以安装 stylus 的 3 版本才可以
// vscode 安装了 vetur 那么 vue 组件内的 style 写 stylus 样式的时候会自动补齐，不想自动补齐 文件--->  首选项---> 设置--->  搜stylus 关闭格式化
</script>

<style lang='stylus' scoped>
h3 
  color teal
  font-size 20px
</style>
