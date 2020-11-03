<template>
  <div>
    <h4>处理异步的 组合action</h4>
    <div v-if="posts.length">
      {{ posts }}
    </div>
    <div v-if="comments.length">
      {{ comments }}
    </div>
    <div>组件自己的 data: {{num}}</div>
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
  data(){
    return {
      num: 100
    }
  },
  methods: {
    ...mapActions(['getPosts', 'getComments']),
  },
  async created() {
    // this.getPosts().then(()=>{
    //   // action 异步处理完毕，可以做其他的事了
    //   console.log(1111)
    // }).catch(()=>{
    //   console.log('异步出问题了');
    // })
   await this.getPosts()
  //  this.getPosts() 其实相当于 this.$dispatch('getPosts')
  // 那么 dispatch 执行完毕之后会返回一个promise
   console.log(1111);
  }
}
</script>
<style></style>