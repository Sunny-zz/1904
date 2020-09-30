<template>
  <div>
    <h2>文章列表组件，分页展示列表</h2>
    <div class="article-list">
      <ul v-if="books.length">
        <li v-for="book in books" :key="book.id">
          {{ book.title }}
        </li>
      </ul>
      <button @click="cancle">取消 axios 请求</button>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="100"
        :page-size="20"
        @current-change="changePage"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "ArticleList",
  data() {
    return {
      books: []
    };
  },
  created() {
    // this.$axios.get("books?_page=1&_limit=20").then(res => {
    //   this.books = res.data;
    //   // console.log(res.data);
    // });
    this.getBook(1);
  },
  // updated() {
  //   // 在这绝对不能执行下列语句,会出现死循环
  //   this.books = [1, 2, 3];
  //   // 重新给 books 赋值，无论赋的值是否一样，都会认为是修改
  //   console.log("11111");
  // },
  methods: {
    getBook(page) {
      // this.books = [];
      // this.CancelToken = axios.CancelToken;
      // console.log(CancelToken);
      // 从 axios 内获取一个取消请求的构造函数
      // this.source = this.CancelToken.source();
      // 使用取消请求的函数创建一个取消对象 对象向内包括取消请求的方法和 token
      // console.log(source.cancel);

      // axios
      //   .get(`https://cnodejs.org/api/v1/topics?page=${page}&limit=20`, {
      //     CancelToken: this.source.token
      //   })
      //   .then(res => {
      //     // setTimeout(() => {
      //     this.books = res.data.data;
      //     // }, 1000);
      //     // console.log(res.data);
      //   });
      const CancelToken = axios.CancelToken;
      // 取消上一次的请求
      // 当没发过任何请求的时候 this 内是没有 cancle 方法的所以无法调用，但是首次执行获取操作并不需要取消请求
      if (this.cancel) {
        console.log(this.cancel);
        this.cancel("Operation canceled by the user.");
      }
      this.$axios
        .get(`https://cnodejs.org/api/v1/topics?page=${page}&limit=20`, {
          cancelToken: new CancelToken(c => {
            // executor 函数接收一个 cancel 函数作为参数
            this.cancel = c;
          })
        })
        .then(res => {
          this.books = res.data.data;
          // console.log(res.data);
        });
    },
    changePage(page) {
      this.getBook(page);
    },
    cancle() {
      this.cancel("Operation canceled by the user.");
      console.log("点击了取消请求按钮");
    }
  }
};
</script>
<style></style>
