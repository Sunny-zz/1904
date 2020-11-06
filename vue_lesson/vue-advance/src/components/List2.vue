<template>
  <div>
    <ul>
      <li v-for="(item,index) in data" :key='index'>
        <slot :item='item' />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'List2',
  props: {
    data: {
      type: Array,
      // 对象或者数组设置默认值的时候必须写成函数返回对象获数组
      default: () => []
    }
  }
};
</script>
<style></style>