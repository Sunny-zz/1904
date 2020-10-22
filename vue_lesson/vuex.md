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
