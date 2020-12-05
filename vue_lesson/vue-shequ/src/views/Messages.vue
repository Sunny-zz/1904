<template>
  <div>消息页面</div>
</template>
<script>
import $axios from '../plugins/axios'
export default {
  data() {
    return {
      //  read_messages: [],
      //  not_read_messages: []
      messages: []
    }
  },
  async created() {
    const token = localStorage.getItem('token')
    console.log(token)
    // if (token) {
    //   const res = await $axios.get(`/messages?accesstoken=${token}`)
    //   console.log(res)
    // }
  }
}
</script>