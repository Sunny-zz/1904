<template>
  <Container v-if="article">
    <div>
      <div>
        <h2>{{ article.title }}</h2>
        <p></p>
        <el-button v-if="userInfo">{{
          article.is_collect ? '取消收藏' : '收藏'
        }}</el-button>
      </div>
      <div class="content" v-html="article.content"></div>
      <Container v-if="article.replies.length && userInfo">
        <template #head>
          <span>{{ article.replies.length }}回复</span>
        </template>
        <ul>
          <li
            class="reply-item"
            v-for="reply in article.replies"
            :key="reply.id"
          >
            <router-link :to="`/user/${reply.author.loginname}`">
              <img :src="reply.author.avatar_url" alt="" />
            </router-link>
            <span class="reply-content" v-html="reply.content"></span>
            <div>
              <span
                ><span :style="{ color: reply.is_uped ? 'red' : '#000' }"
                  >赞</span
                >{{ reply.ups.length || '' }}</span
              >
              <span>回</span>
            </div>
          </li>
        </ul>
      </Container>
      <Container v-if="userInfo">
        <template #head>
          <span>添加回复</span>
        </template>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>提交</button>
      </Container>
    </div>
  </Container>
</template>

<script>
import Container from '../lauout/Container'
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    Container
  },
  computed: {
    ...mapState(['article', 'userInfo'])
  },
  created() {
    const { id } = this.$route.params
    this.getArticle(id)
  },
  methods: {
    ...mapActions(['getArticle'])
  }
}
</script>
<style lang="stylus">
.content
.reply-item 
    display: flex;
    > a 
      width: 50px;
      height: 50px;
      img
        width: 100%;
    .reply-content 
      flex-grow: 1;
    > div 
      span
        cursor: pointer;
        margin-right: 10px;
</style>
