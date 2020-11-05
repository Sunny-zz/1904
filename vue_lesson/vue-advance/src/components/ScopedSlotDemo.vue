<template>
  <div>
    <h2>作用域插槽</h2>
    <p>有时让插槽内容能够访问子组件中才有的数据是很有用的</p>
    <div>
      <h4>展示父组件传递过来的插槽内容</h4>
      <slot :obj="obj" :a='10' />
      <!-- 子组件给 slot 传递属性 -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'ScopedSlotDemo',
  data() {
    return {
      obj: {
        name: '小黑',
        age: 18
      }
    }
  },
};
</script>
<style></style>