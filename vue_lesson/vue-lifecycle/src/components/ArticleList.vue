<template>
  <div>
    <h3>文章列表子组件</h3>
    <ul v-if="articles.length">
      <LiItem v-for="article in articles" :key="article.id" :article="article" />
    </ul>
  </div>
</template>
<script>
import LiItem from './LiItem'
export default {
  name: 'ArticleList',
  props: ['articles'],
  components: {
    LiItem
  },
  created() {
    console.log('文章列表子组件 created')
  },
  mounted() {
    console.log('文章列表子组件 mounted')
  },
  updated() {
    console.log('文章列表子组件 updated')
  }
}
</script>
<style></style>