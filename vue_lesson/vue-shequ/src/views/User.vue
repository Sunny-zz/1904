<template>
  <div v-if="otherUserInfo">
    <h2>用户个人中心</h2>
    <img :src="otherUserInfo.avatar_url" alt="" />
    <div class="list">
      <ul v-if="showCreateTopics.length">
        <li v-for="item in showCreateTopics" :key="item.id">
          {{ item.title }}
        </li>
      </ul>
      <!-- <router-link :to="`/user/${$route.params.username}/topics`"
        >查看更多</router-link
      > -->
      <router-link :to="{ name: 'MoreTopic' }">查看更多</router-link>
    </div>
  </div>
</template>
<script>
// import $axios from '../plugins/axios'
import { mapState, mapActions } from 'vuex'
export default {
  // data() {
  //   return {
  //     userInfo: null
  //   }
  // },
  computed: {
    ...mapState(['otherUserInfo']),
    showCreateTopics() {
      // [1,2,3,4,5,6,7,8,9]
      const topics = this.otherUserInfo.recent_topics
      return topics.length > 5 ? topics.slice(0, 5) : topics
    }
  },
  watch: {
    '$route.params': {
      async handler(newValue, oldValue) {
        const { username } = newValue || oldValue
        this.getOtherUserInfo(username)
      },
      immediate: true
    }
  },
  methods: {
    ...mapActions(['getOtherUserInfo'])
  }
}
</script>