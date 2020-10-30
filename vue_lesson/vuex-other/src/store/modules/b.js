import axios from 'axios'
const b = {
  state: ()=> ({
    posts: [],
    comments: []
  }),
  mutations: {
    getPosts(state,posts){
      state.posts = posts
    },
    getComments(state,comments){
      state.comments = comments
    } 
  },
  actions: {
    getPosts({commit}){
      // 发请求获取文章列表数据 触发对应的 mutation
      axios.get('http://localhost:3008/post').then(res => {
        commit('getPosts',res.data)
        // 判断什么时候可以执行 getComments 的 action
      })
    },
    getComments({commit}){
      axios.get('http://localhost:3008/comments').then(res => {
        commit('getComments',res.data)
      })
    }
  }
}
export default b