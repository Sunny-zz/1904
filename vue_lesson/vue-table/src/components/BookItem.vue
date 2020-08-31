<template>
  <tr>
    <td class="td-center">{{ book.id }}</td>
    <td>
      <span>{{ book.title }}</span
      ><span>{{ book.country }}</span>
    </td>
    <td class="td-center">{{ book.author }}</td>
    <td class="td-center">{{ book.importance }}</td>
    <td class="td-center">{{ book.importance }}</td>
    <td class="td-center">{{ book.status }}</td>
    <td>
      <button>编辑</button>
      <button @click="$emit('del-book', book.id)">删除</button>
    </td>
  </tr>
</template>
<script>
// 单个书籍组件  接收到对象数据进行书籍信息展示，也可以对数据数据进行操作
export default {
  name: "BookItem",
  props: ["book"]
};
</script>
<style></style>
