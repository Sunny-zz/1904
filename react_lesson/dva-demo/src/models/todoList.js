import { getList } from "../services/example"
import getShowList from "../utils/getShowList"

export default {
  namespace: 'todoList',
  state: [],
  reducers: {
    getList(state, { list }) {
      return list
    },
    addTodo(state, { todo }) {
      return [...state, todo]
    },
    delTodo(state, { id }) {
      return state.filter(todo => todo.id !== id)
    },
    changeTodo(state, { id }) {
      return state.map(todo => {
        const _todo = { ...todo }
        if (_todo.id === id) {
          _todo.isCompleted = !_todo.isCompleted
        }
        return _todo
      })
    },
    clearCompletedTodo(state) {
      return getShowList(state, 'active')
    }
  },
  effects: {
    *getListAsync(action, { call, put }) {
      const list = yield call(getList)
      yield put({ type: 'getList', list })
    }
  }
}