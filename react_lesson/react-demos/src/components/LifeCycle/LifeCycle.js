import { Component } from 'react'
class LifeCycle extends Component {
  state = {
    count: 0
  }
  constructor() {
    super()
    // console.log(this)
    console.log('我是 constructor 钩子，初始化 state')
  }
  render() {
    const { count } = this.state
    console.log('我是 render 钩子，开始渲染组件')
    return (
      <div>
        <h2>react 组件的生命周期</h2>
        <span>{count}</span>
        <button onClick={() => this.setState({ count: count + 1 })}>add</button>
        {/* 组件的生命周期分为三阶段 */}
        {/* 组件的寿命周期钩子函数可以写成普通函数，也可以直接使用 this */}
        {/* 1. Mounting  挂载，组件被创建渲染到页面 */}
        {/* 该阶段升四个生命周期钩子 */}
        {/* constructor()  初始化 state */}
        {/* static getDerivedStateFromProps()  */}
        {/* render() 组件渲染需要的节点 */}
        {/* componentDidMount() 组件再页面中渲染完毕   通常可以发请求获取数据更新 state */}
        {/* 2. updating 更新，state 或者 props 发生改变的就会触发更新*/}
        {/* static getDerivedStateFromProps() */}
        {/* shouldComponentUpdate() 组件更新之前，在此可以阻止 state 或 props 更新 必须设置返回值*/}
        {/* render() 重新更新视图 */}
        {/* getSnapshotBeforeUpdate() */}
        {/* componentDidUpdate() 更新完毕，页面更新完毕*/}
        {/* 3. 卸载 */}
        {/* componentWillUnmount() 组件将要被卸载 */}
      </div>
    )
  }
  componentDidMount() {
    console.log('我是CDM钩子,组件渲染完毕')
    // this.x = setInterval(() => { console.log(1) }, 1000)
  }
  shouldComponentUpdate(nextProps, nextState) {
    // 这个钩子可以接收两个参数，分别是新的 props 以及新的 state ，可以根据要新的更新的内容去判断是否更新
    // console.log(nextProps, nextState)
    console.log('我是SCU钩子,组件是否应该更新')
    return true
  }
  componentDidUpdate() {
    console.log('我是CDU钩子,组件更新完毕，可以获取更新之后的 dom 节点')
  }
  componentWillUnmount() {
    console.log('我是CWU钩子,组件即将被卸载')
    // clearInterval(this.x)
  }
}
export default LifeCycle