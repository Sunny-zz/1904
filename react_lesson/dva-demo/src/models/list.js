export default {
  namespace: 'list',
  state: [],
  reducers: {
    getList(state, { list }) {
      console.log(list)
      return list
    }
  },
  effects: {
    *getListAsync({ listLype }, { put }) {
      // 接收不同的类型更新列表数据
      // console.log(listLype)
      if (listLype.includes('frontend')) {
        yield put({ type: 'getList', list: [{ id: 1, title: '前端文章1' }] })
      } else if (listLype.includes('backend')) {
        yield put({ type: 'getList', list: [{ id: 2, title: '后端文章1' }] })
      } else {
        yield put({ type: 'getList', list: [{ id: 3, title: '推荐文章1' }] })
      }
    }
  },
  subscriptions: {
    // listWatcher 监听列表动态参数而变化，去更新 state 数据
    listWatcher({ dispatch, history }) {
      // 添加 history 监听
      history.listen(({ pathname }) => {
        // 只有在 location 的 pathname 或者说地址栏出现 list 的时候才会监听
        // 监听有一个问题，当点击同样的路由地址的时候，也会触发
        // 我们需要将类别存储一下，然后和新的类别进行比较在使用 dispatch 发 action 
        // 这个例子中并没有 去比较
        if (pathname.includes('list')) {
          const listLype = pathname.replace('/list', '')
          // 根据不同的动态路由参数 type
          dispatch({ type: 'getListAsync', listLype })
        }
      })
    }
  }
}