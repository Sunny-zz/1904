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
      <BookItem
        v-for="book in books"
        :key="book.id"
        :book="book"
        @del-book="delBook"
      />
    </tbody>
  </table>
</template>
<script>
import BookItem from "./BookItem";
import axios from "axios";
export default {
  name: "BookTable",
  components: {
    BookItem
  },
  data() {
    return {
      books: []
    };
  },
  created() {
    axios.get("http://localhost:3000/books").then(res => {
      // console.log(res.data);
      this.books = res.data;
    });
  },
  methods: {
    delBook(id) {
      // 因为数据是后台的数据，想要实现删除功能
      // 首先需要删除后台数据
      // 等待后台数据删除完毕之后再去删除本地的data
      axios.delete(`http://localhost:3000/books/${id}`).then(() => {
        // console.log(res);
        // this.books = res.data;
        this.books = this.books.filter(item => item.id !== id);
        console.log("删除成功");
      });
    }
  }
};
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
