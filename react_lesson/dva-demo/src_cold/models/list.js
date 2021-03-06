import { getList } from '../services/example'
export default {
  namespace: 'list',
  state: [],
  reducers: {
    getList(state, payload) {
      return payload.list
    }
  },
  effects: {
    // 必须是 Generator 函数
    *getListAsync( action, { put, call }) {
      //  put 用来触发 reducer 
      //  call 用来发异步请求
      const res = yield call(getList)
      yield put({ type: 'getList', list: res.data });
    }
  }
}