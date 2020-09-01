<template>
  <table v-if="books.length">
    <thead>
      <tr>
        <th style="width: 100px">序号</th>
        <th>标题</th>
        <th>作者</th>
        <th>重要性</th>
        <th>阅读数</th>
        <th>状态</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <BookItem v-for="book in books" :key="book.id" :book="book" />
    </tbody>
  </table>
</template>
<script>
import BookItem from './BookItem'

export default {
  name: 'BookTable',
  components: {
    BookItem
  },
  props: ['books']
}
</script>
<style>
table {
  border-collapse: collapse;
}
td,
th {
  border: 1px solid #999;
  line-height: 40px;
  padding-left: 10px;
  padding-right: 10px;
}

.td-center {
  text-align: center;
}
</style>
