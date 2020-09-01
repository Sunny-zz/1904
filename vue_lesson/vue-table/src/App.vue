<template>
  <div>
    <h1>vue 综合表格功能制作案例</h1>
    <BookSearch :searchInfo="searchInfo" @change-search-info="changeSearchInfo" />
    <BookTable :books="showBooks" />
  </div>
</template>

<script>
// $attrs   $listeners
import BookTable from './components/BookTable'
import BookSearch from './components/BookSearch'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    BookTable,
    BookSearch
  },
  data() {
    return {
      books: [],
      // 当你将下列数据的每一个属性，都分别对应一个点击事件做修改
      // 那么修改的方法没有必要写成三个分别修改，可以写成写成一个  xx(属性名,属性值){this[名] = 值 }
      searchInfo: {
        title: '',
        importance: 0,
        country: ''
      }
    }
  },
  computed: {
    // 筛选之后的书籍
    showBooks() {
      // 因为该计算属性是在页面初始的时候就执行，所以在父组件的 computed 内无法获取子组件实例
      // 也就是不可以使用 $refs 和 $children
      // console.log(this.$refs.bookSearch)
      const { title, importance, country } = this.searchInfo
      // const re = new RegExp(title, 'i')
      return this.books.filter(
        (book) =>
          // (title ? re.test(book.title) : true) &&
          (title ? book.title.match(new RegExp(title, 'i')) : true) &&
          (importance ? book.importance === importance : true) &&
          (country ? book.country === country : true)
      )
    }
  },
  created() {
    axios.get('http://localhost:3000/books').then((res) => {
      // console.log(res.data);
      this.books = res.data
    })
  },

  // 在子组件内使用 $parent 可以获取父组件实例
  // 在父组件内使用 $children 可以获取所有子组件实例组成的数组
  // mounted() {
  //   console.log(this.$children)
  // },
  methods: {
    delBook(id) {
      // 因为数据是后台的数据，想要实现删除功能
      // 首先需要删除后台数据
      // 等待后台数据删除完毕之后再去删除本地的data
      axios.delete(`http://localhost:3000/books/${id}`).then(() => {
        // console.log(res);
        // this.books = res.data;
        this.books = this.books.filter((item) => item.id !== id)
        // console.log("删除成功");
      })
    },
    changeSearchInfo(title, importance, country) {
      console.log(title, importance, country)

      this.searchInfo.title = title
      this.searchInfo.importance = importance
      this.searchInfo.country = country
    }
  }
}
</script>

<style></style>
