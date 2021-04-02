export default {
  namespace: 'count',
  state: 100,
  reducers: {
    add(state){
      return state + 10 
    },
    setCount(state, payLoad){
      return payLoad.data
    }
  }
}