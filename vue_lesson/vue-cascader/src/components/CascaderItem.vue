<template>
  <div class="list-wrap">
    <div class="list-content">
      <div
        @click="currentItem = item"
        v-for="(item, index) in listData"
        :key="index"
      >
        {{ item.label }}
      </div>
    </div>
    <CascaderItem v-if="list.length" :listData="list" />
  </div>
</template>
<script>
// 点击了 一级1  然后一级1-1
// 1.   1 -->  1-1|1-2  --> 1-1-1
// Cascader-- > CascaderItem(currentItem 1) ---> CascaderItem(currentItem 1-1) ---> CascaderItem(currentItem null)
//  点击了 一级2
// 2.   2 -->  2-1|2-2  --> 1-1-1
// Cascader-- > CascaderItem(currentItem 2) ---> CascaderItem(currentItem 1-1) ---> CascaderItem(currentItem null)
export default {
  // 组件内部想要使用自己必须先声明 name 属性
  name: 'CascaderItem',
  data() {
    return {
      currentItem: null
    }
  },
  props: {
    listData: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    list() {
      const { currentItem } = this
      return currentItem && currentItem.children ? currentItem.children : []
    }
  }
}
</script>
<style>
.list-wrap {
  display: flex;
}
.list-content {
  margin-right: 40px;
}
</style>