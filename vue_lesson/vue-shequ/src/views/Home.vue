<template>
  <Caontainer
    v-loading.fullscreen.lock="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <template #head>
      <div class="tabs">
        <!-- @click.native  应用到组件上 相当于给组件的根元素绑定事件 -->
        <!-- <router-link @click.native="handleTab" to="/?tab=all">全部</router-link>
        <router-link @click.native="handleTab" to="/?tab=good"
          >精华</router-link
        >
        <router-link @click.native="handleTab" to="/?tab=share"
          >分享</router-link
        >
        <router-link @click.native="handleTab" to="/?tab=ask">问答</router-link>
        <router-link @click.native="handleTab" to="/?tab=job">招聘</router-link> -->
        <router-link
          :class="{
            'router-link-active':
              !$route.query.tab || $route.query.tab === 'all'
          }"
          exact
          to="/?tab=all"
          >全部</router-link
        >
        <router-link
          :class="{ 'router-link-active': $route.query.tab === 'good' }"
          exact
          to="/?tab=good"
          >精华</router-link
        >
        <router-link
          :class="{ 'router-link-active': $route.query.tab === 'share' }"
          exact
          to="/?tab=share"
          >分享</router-link
        >
        <router-link
          :class="{ 'router-link-active': $route.query.tab === 'ask' }"
          exact
          to="/?tab=ask"
          >问答</router-link
        >
        <router-link
          :class="{ 'router-link-active': $route.query.tab === 'job' }"
          exact
          to="/?tab=job"
          >招聘</router-link
        >
      </div>
    </template>
    <div v-if="!articleList">请稍等</div>
    <ul class="list" v-else-if="articleList.length">
      <li class="item" v-for="item in articleList" :key="item.id">
        <span
          v-if="
            $route.query.tab === 'all' ||
            $route.query.tab === 'good' ||
            !$route.query.tab
          "
          :class="[
            'type',
            item.top
              ? 'top'
              : item.good
              ? 'good'
              : item.tab === 'ask'
              ? 'ask'
              : ''
          ]"
          >{{ item | formatType }}</span
        >
        <span class="link"
          ><router-link :to="`/topic/${item.id}`">{{
            item.title
          }}</router-link></span
        >
        <span class="time">3 个月前</span>
      </li>
    </ul>
    <div v-else>无内容</div>
    <!-- 分页器 -->
    <el-pagination
      background
      layout="prev,pager, next"
      :page-size="20"
      :total="800"
      :current-page.sync="page"
      @current-change="changePage"
    >
      <!-- current-page 定义成组件的 data  修改的时候 可以使用修饰符 .sync-->
    </el-pagination>
  </Caontainer>
</template>
<script>
import Caontainer from '../lauout/Container'
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      page: 1,
      loading: false
    }
  },
  components: {
    Caontainer
  },
  filters: {
    formatType(articleObj) {
      return articleObj.top
        ? '置顶'
        : articleObj.good
        ? '精华'
        : articleObj.tab === 'share'
        ? '分享'
        : articleObj.tab === 'ask'
        ? '问答'
        : '招聘'
    }
  },
  watch: {
    '$route.query': {
      async handler(newValue, oldValue) {
        // console.log(newValue, oldValue)
        const { tab, page } = newValue
        this.loading = true
        // console.log('地址栏的查询部分改变了')
        if (!page) {
          // console.log('更新 page 为 1')
          this.page = 1
        }
        // this.getArticles({ tab, page: page || 1 }).then(() => {
        //   this.loading = false
        // })
        await this.getArticles({ tab, page: page || 1 })
        this.loading = false
      },
      immediate: true
    }
  },
  computed: {
    ...mapState(['articleList'])
  },
  // created() {
  //   this.getArticleList()
  // },
  methods: {
    ...mapActions(['getArticles']),
    // handleTab() {
    //   this.getArticleList()
    // },
    // getArticleList() {
    //   const { tab } = this.$route.query
    //   // console.log(this.$route)
    //   this.getArticles(tab)
    // }
    changePage(pageNum) {
      // this.getArticles({ tab: this.$route.query.tab, page: pageNum })
      // 修改地址栏的地址
      // localhost:8080    --->   localhost:8080?tab=all&page=2
      // localhost:8080?tab=ask    localhost:8080?tab=ask&page=2
      // localhost:8080?tab=ask&page=2    localhost:8080?tab=ask&page=3
      const query = this.$route.query
      const tab = query.tab ? query.tab : 'all'
      this.$router.push(`/?tab=${tab}&page=${pageNum}`)
    }
  }
}
</script>
<style lang="stylus">
 .tabs 
    display flex
    a 
      display block
      padding 4px
      border-radius 3px
      margin-right 15px 
      font-size 14px  
      text-decoration none
      color #369219
    .router-link-active
      background-color #369219
      color #fff
  .list 
    list-style none
    padding-left 0
    margin 0
    li.item
      line-height 60px
      padding 0 20px
      border-bottom 1px solid #ccc
      display flex
      align-items center
      .type
        font-size 14px
        color #999
        padding 3px 
        line-height 16px
        background-color #e5e5e5
        border-radius 3px
        margin-right 10px
        flex-shrink 0
      .top , .good
        background-color #369219
        color #fff
      .ask 
        border 1px solid red
        color red
        background-color #fff
      .link 
        flex-grow 1
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
        margin-right 20px
      .time 
        flex-shrink 0
</style>