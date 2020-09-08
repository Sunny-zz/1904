<template>
  <li>{{article.title}}</li>
</template>
<script>
export default {
  name: 'LiItem',
  props: ['article'],
  created() {
    console.log('单个文章孙子组件 created')
  },
  mounted() {
    console.log('单个文章孙子组件 mounted')
  },
  updated() {
    console.log('单个文章孙子组件 updated')
  }
}
</script>
<style></style>