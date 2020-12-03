<template>
  <div>
    <!-- 分页器 两种使用方式 -->
    <!-- 1. 所有数据都获取了 然后分页 -->
    <!-- 2. 只拿了一个页面数据，然后分页 -->
    <ul>
      <!-- 0     79   80 -->
      <li v-for="item in showRecent_topics" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
    <el-pagination
      v-if="recent_topics.length > 20"
      background
      layout=" prev,pager, next"
      :page-size="20"
      :current-page="currentPage"
      :total="recent_topics.length"
      @current-change="changePage"
    >
    </el-pagination>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      currentPage: 1
    }
  },
  created() {
    // 看 store 中 otherUserInfo 是否存在
    if (!this.otherUserInfo) {
      // 根据用户名重新请求用户数据更新 otherUserInfo
      const { username } = this.$route.params
      console.log(username)
      this.getOtherUserInfo(username)
    }
  },
  computed: {
    ...mapState(['otherUserInfo']),
    ...mapGetters(['recent_topics']),
    showRecent_topics() {
      const { currentPage, recent_topics } = this
      // console.log(currentPage)
      return recent_topics.length > 20
        ? recent_topics.slice(
            (currentPage - 1) * 20,
            (currentPage - 1) * 20 + 20
          )
        : recent_topics
    }
  },
  methods: {
    ...mapActions(['getOtherUserInfo']),
    changePage(pageNum) {
      // console.log(pageNum)
      this.currentPage = pageNum
    }
  }
}
</script>
