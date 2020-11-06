<template>
  <div>
    <ul>
      <!-- <ListItem v-for="(item,index) in arr" :key="index" :item='item' /> -->
      <ListItem1 v-for="(item,index) in arr" :key="index" :item='item' :render='render'  />
    </ul>
  </div>
</template>
<script>
import ListItem1 from './ListItem1'
export default {
  name: 'List',
  components: {
    ListItem1,
  },
  props: {
    arr: {
      type: Array,
      // 对象或者数组设置默认值的时候必须写成函数返回对象获数组
      default: () => []
    },
    render: {
      type: Function
    }
  }

};
</script>
<style></style>