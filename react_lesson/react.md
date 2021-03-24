## react

### 环境搭建

### react 项目内容简介

### react 的基础知识

#### JSX 语法

#### react 组件

- 函数组件
- class 组件

#### state

#### props
- 校验

#### 事件绑定

#### 条件渲染

#### html 字符串渲染

#### 列表渲染

#### 表单
event  ref
- 受控
- 非受控

#### react 组件的生命周期
- cdm
- cdu
- cwum

#### react 组件之间的通信
- prop
- 状态提升
- context 
- ref 

#### context 共享数据

#### 减少 props 的传递数量

#### render prop

#### 深入 jsx 

#### Hook
- useState
- useEffect
- useContext
- useRef
- useRedecer

### react 路由
在 react 单页面应用中实现页面的跳转
- 安装 `react-router-dom` 
- 使用主要是使用路由提供的各种组件实现路由功能
  - BroswerRouter  |  HashRouter 
  - Route   path  component | children | render 
  - Switch  功能型


### redux  
安装
- redux
- react-redux

创建 store
- createStore
- reducer
  - 初始化 store 数据
  - 提供修改的方法，需要 action 触发 (切记不能直接对 state 进行修改)

组件内使用和修改 (react-redux)
- Provider
- connect 
  - mapStateToProps
  - mapDispatchToProps

redux 中间件
- redux-logger 