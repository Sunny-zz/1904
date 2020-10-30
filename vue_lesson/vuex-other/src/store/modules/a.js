const a = {
  namespaced: true,
  state: ()=>({
    number: 100
  }),
  mutations: {
    changeNum(state,newNum){
      state.number = newNum
    }
  },
  actions: {
    // 不一定当存在异步的时候创建 action
    // 不存在异步也可以创建 action (有点多此一举)
    // changeNum({commit},newNum){
    //   console.log('触发了 action');
    //   commit('changeNum',newNum)
    // }
    // 设置全局的 action 
    changeNum: {
      root: true,
      handler({commit},newNum){
        commit('changeNum',newNum)
      }
    }
  }
}

export default a