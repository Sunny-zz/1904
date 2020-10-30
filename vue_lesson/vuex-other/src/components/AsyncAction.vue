<template>
  <div>
    <h4>处理异步的 组合action</h4>
    <div v-if="posts.length">
      {{ posts }}
    </div>
    <div v-if="comments.length">
      {{ comments }}
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'AsyncAction',
  computed: {
    ...mapState({
      posts: (state) => state.b.posts,
      comments: (state) => state.b.comments
    })
  },
  methods: {
    ...mapActions(['getPosts', 'getComments'])
  },
  created() {
    this.getPosts()
  }
}
</script>
<style></style>