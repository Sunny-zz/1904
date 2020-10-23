### Vuex 状态管理模式
就是实现组件之间交互的终极方案。将组件间需要交互的数据(data),共享到 vuex 创建的 store(仓库) 内。

#### store 的创建

- 安装 vuex `npm i vuex`
- 在 src 下新建 store.js 文件用来创建 store
  store.js
  ```js
    import Vue from 'vue'
    import Vuex from 'vuex'
    Vue.use(Vuex)

    const store = new Vuex.Store({
      state: {
        count: 0
      }
    })

    export default store
  ```
- 在 main.js 内导入 store , 将 store 加入到整个 vue 的项目实例内

#### store 的使用

- 组件内获取 store 数据
  ```js
    // 一般获取 store 内的数据写成计算属性的方式
    computed:{
      count: this.$store.state.count
    }
    // vuex 提供了 mapState 辅助函数
    // 就是将 store 内的数据使用该函数映射成组件的 computed
    computed: {
      ...mapState(['count']),
      ...mapState({
        myCont: 'count'
      }),
      ...mapState({
        myCont: state => state.count,
        myCount(state){
          // 这个函数内可以使用 this
          return state.count
        }
      })
    }
  ```
- 组件内修改 store 数据
  - 需要在创建 store 的时候定义好修改的方法,也就是创建 mutation 
    ```js
      const store = new Vuex.Store({
        ...
        mutations: {
          add(state){
            state.count++
          }
        }
      })
    ```
  - 在组件内使用 `store.commit('add')` 来修改 store 中的数据


#### mutation 

mutation 是函数，这个函数用来修改 store 内的数据的。想要调用这个 mutation 函数的话，必须使用 store 内的 commit 方法。
创建
  ```js
    const store = new Vuex.Store({
      state: {
        num: 0
        ...
      },
      mutations: {
        // mutation 函数
        // mutation 函数只能接收两个参数
        // mutation 函数默认第一个参数是 state,函数内部直接对 state 内的数据进行修改
        // mutation 函数第二个参数是 payload,修改 state 需要的额外内容,一般写成对象类型
        // mutation 函数必须是同步函数，里面不能加异步操作
        add(state){
          state.num ++
        },
        change(state,payload){
          state.num = payload.newNum
        }
      }
    })
  ```
组件内使用
  ```js
    // 1. 使用 this.$store.commit 去提交 mutation
    this.$store.commit('add')
    this.$store.commit({
      type: 'add'
    })
    this.$store.commit('change',{newNum: 100})
    this.$store.commit({
      type: 'change',
      newNum: 100
    })
    // 2. vuex 提供了 mapMutations 辅助函数
    // 就是将 store 内的 mutation 函数，映射成组件内的 method，并且内部自带 commit 功能

    import  {mapMutations } from 'vuex'

    export default {
      // ...
      methods:{
        ...mapMutations(['add','change']),
        ...mapMutations({
          jia: 'add',
          update: 'change'
        })
      },
      // 如果 methods 内没有其他的方法可以写成下面的方式
      methods: mapMutations({
          jia: 'add',
          update: 'change'
        })
      
    }  
  ```
