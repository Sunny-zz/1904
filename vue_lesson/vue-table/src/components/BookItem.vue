<template>
  <tr>
    <td class="td-center">{{ book.id }}</td>
    <td>
      <span>{{ book.title }}</span>
      <span>{{ book.country }}</span>
    </td>
    <td class="td-center">{{ book.author }}</td>
    <td class="td-center">{{ book.importance }}</td>
    <td class="td-center">{{ book.importance }}</td>
    <td class="td-center">{{ book.status }}</td>
    <td>
      <button @click="editClick(book.id)">编辑</button>
      <!-- 借助了 $parent 获取父组件实例 拿到祖先的 删除事件 直接绑定 -->
      <button @click="$parent.$parent.delBook(book.id)">删除</button>
    </td>
  </tr>
</template>
<script>
// 单个书籍组件  接收到对象数据进行书籍信息展示，也可以对数据数据进行操作
export default {
  name: 'BookItem',
  props: ['book'],
  methods: {
    editClick(id) {
      this.$parent.$parent.open()
      this.$parent.$parent.changeEditBookId(id)
    }
  }
}
</script>
<style></style>
