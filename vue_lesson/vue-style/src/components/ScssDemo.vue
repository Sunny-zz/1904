<template>
  <div class="scss-demo">
    <div>
      <h3>在 vue 中使用 scss 语法写样式</h3>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ScssDemo'
}
</script>
<style lang="scss">
/* scss 语法就 css 的扩展语法 */
/* 默认我们先安装的 vue 环境是不支持 scss 语法的需要安装工具 */
/* 需要安装 node-sass 以及 sass-loader  */
/* 安装好了工具包之后就可以字啊组件内使用 scss 语法了 */

// 1. 样式嵌套
// 2. 设置变量
// 3. 运算
// 4. if 或者 for
// 5. 样式的导入
@import '../assets/public.scss';
$active: red;
.scss-demo {
  h3 {
    color: $active;
    width: $width;
  }
  &:hover h3 {
    color: #000;
  }
}
</style>
