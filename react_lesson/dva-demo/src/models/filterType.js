export default {
  namespace: 'filterType',
  state: 'all',
  reducers: {
    changeType(state, {filterType}){
      return filterType
    }
  }
}