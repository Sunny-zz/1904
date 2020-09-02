<template>
  <div>
    <h1>vue 综合表格功能制作案例</h1>
    <BookSearch :searchInfo="searchInfo" @change-search-info="changeSearchInfo" />
    <BookTable v-if="isSuccess" :books="showBooks" />

    <img
      v-else
      src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599021504907&di=fff57654b4a4f2bcd564d300655bf60d&imgtype=0&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D2250256431%2C1334239184%26fm%3D214%26gp%3D0.jpg"
      alt
    />
    <Dialog @close="close" :showDialog="showDialog" :currentBook="currentBook" />
  </div>
</template>

<script>
// $attrs   $listeners
import BookTable from './components/BookTable'
import BookSearch from './components/BookSearch'
import Dialog from './components/Dialog'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    BookTable,
    BookSearch,
    Dialog
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
      },
      isSuccess: false,
      showDialog: false,
      editBookId: ''
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
    },
    currentBook() {
      // 该计算属性是点击编辑的时候展示正确的书籍内容
      // 设置了一个 编辑的书籍 id 点击编辑的时候修改 ，然后用该 id 和 books 做计算，计算出来需要编辑的书籍并展示
      // 但是当没有点击编辑的时候 编辑的书籍 id 不存在那么计算出来的书籍就是 undefined 传递给dialog 会报错(因为 Dialog 写的是 v-show)
      // 所以当编辑的书籍 id 不存在的时候，该计算属性返回一个默认对象
      return this.editBookId
        ? this.books.find((item) => item.id === this.editBookId)
        : {
            id: '0',
            title: '',
            author: '',
            importance: 0,
            status: '',
            country: '',
            comment: ''
          }
    }
  },
  created() {
    axios.get('http://localhost:3000/books').then((res) => {
      // console.log(res.data);
      setTimeout(() => {
        this.isSuccess = true
        this.books = res.data
      }, 1000)
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
    },
    open() {
      this.showDialog = true
    },
    close() {
      this.showDialog = false
    },
    // toggle(val) {
    //   this.showDialog = val
    // }
    changeEditBookId(id) {
      this.editBookId = id
    },
    editBook(newBook) {
      // 当时使用数组下标对数组直接进行修改时不会触发视图更新
      // arr [1,2,3]
      // arr[0] = 5
      axios
        .patch(`http://localhost:3000/books/${newBook.id}`, newBook)
        .then((res) => {
          console.log(res)
          this.books = this.books.map((item) =>
            item.id === newBook.id ? newBook : item
          )
        })
    }
  }
}
</script>

<style></style>
