<template>
  <div>
    <h1 class="title">生命周期</h1>
    <div v-if="articles.length">
      <div v-for="article in articles" :key="article.id">
        <h3>{{ article.title }}</h3>
        <span style="font-size:20px;color: red;" class="iconfont icon-dianzan"></span>
      </div>
    </div>
    <div v-else>假的 gif</div>
    <Hello />
  </div>
</template>

<script>
import Hello from './components/Hello'
import axios from 'axios'
// import './assets/icons/iconfont.css'
export default {
  name: 'App',
  data() {
    return {
      articles: []
    }
  },
  components: {
    Hello
  },
  // 生命周期
  // 阶段 一
  // 初始渲染阶段 (其实就是页面刚进入的时候或者刷新的时候)
  // 该阶段需要实现的大概有 获取页面初始数据(进入页面就向后台获取数据然后更新页面，或者其他的一些进入页面就需要做的事)
  beforeCreate() {
    console.log('组件刚被创建，在初始化data之前')
  },
  created() {
    console.log(
      '组件的数据观测 (data observer)，property 和方法的运算，watch/event 事件回调,配置完毕'
    )
    // this.num = 1000;
    // 此阶段最适合进入页面就修改 data ，发送请求获取后台数据，修改 data
    axios.get('http://localhost:3000/articles').then((res) => {
      // console.log(res.data);
      setTimeout(() => {
        this.articles = res.data
      }, 1000)
    })
  },
  beforeMount() {
    console.log('组件即将要渲染，挂载之前')
  },
  mounted() {
    console.log('渲染执行完毕')
    // console.log(document.querySelector(".title"));
    // 刚进入页面想要获取真实的 dom 节点做一些功能，在此阶段可以实现
    // 比如说 swiper 插件  使用的时候  new Swiper('.container')  需要获取真实 dom 节点 container
  }
}
</script>

<style></style>
