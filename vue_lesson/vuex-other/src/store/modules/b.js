import axios from 'axios'
const b = {
  state: () => ({
    posts: [],
    comments: []
  }),
  mutations: {
    getPosts (state, posts) {
      state.posts = posts
    },
    getComments (state, comments) {
      state.comments = comments
    }
  },
  actions: {
    // action 函数内的 第一个参数 context 内部其实有很多属性可以使用比如 commit  dispatch  state ...
    // getPosts ({ commit }) {
    //   // 发请求获取文章列表数据 触发对应的 mutation
    //   // axios.get('http://localhost:3008/post').then(res => {
    //   //   commit('getPosts', res.data)
    //   // })
    //   return new Promise((resolve, reject) => {
    //     axios.get('http://localhost:3008/post').then(res => {
    //       console.log(22222);
    //       if (res.status === 200) {
    //         commit('getPosts', res.data)
    //         resolve()
    //       } else {
    //         reject()
    //       }
    //     }).catch(() => {
    //       reject()
    //     })
    //   })
    // },
    async getPosts ({ commit }) {
      const res = await axios.get('http://localhost:3008/post')
      //  await 关键词作用是将后面的异步可以看做同步，就是等待异步执行之后在赋值，而且后续操作都会在之后执行
      // await 后面需要跟着 promise
      console.log(2222);
      commit('getPosts', res.data)
    },
    getComments ({ commit }) {
      axios.get('http://localhost:3008/comments').then(res => {
        commit('getComments', res.data)
      })
    }
  }
}
export default b