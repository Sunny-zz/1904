// import store from './store'
import { connect } from 'react-redux'
import { ADD, SUB } from './store/actionTypes'
// 如何取已经共享的 store 数据
// 需要借助 react-redux 中的 connect 高阶函数去动态获取, connect 的作用其实就是将 store 的数据映射成组件的 props, 和组件原来的 props 合并
// connect 的用法是直接调用，并传递一个参数
// 这个参数称为 mapStateToProps 函数
// 那么就需要先定义这个函数
// mapStateToProps 函数默认接收 store 中共享的数据作为参数，而且必须返回一个对象，对象内的属性当作 prop 给组件
// 使用 connect(mapStateToProps)(组件) 那么这个组件就会接收对应的 prop 了
function App(props) {
  // console.log(props)
  const add = () => {
    // 想要修改 store 内的数据需要 store 的 dispatch 方法，但是这样每次想要修改 store 数据必须引入 store 才行
    // 需要优化 就是直接使用 connect 优化，给 connect 传递第二个参数，这个参数叫 mapDispatchToProps, 也是一个函数，该函数默认接收 dispatch 作为参数，我们需要设置一个返回值，返回值是一个对象， 这个对象下的属性也会当作 props 传递给组件。所以我们只需要将带有 dispatch 的函数直接写成对象的属性， 那么组件自然就会接收到带 dispatch 的方法了
    // mapDispatchToProps 函数其实就是一个制作 dispatch 修改 store 方法的函数，这个函数其实只需要传递修改的 type 以及需要用到的数据(载荷数据)
    props.add()
    // store.dispatch({type: 'ADD'})
    // store.getState() 只是向 store 中获取数据，并不是动态获取，也就是说 store 变了要重新获取才可以 
    // console.log(store.getState())
    // 为了在动态获取 store 内的数据 需要借助 react-redux 
  }
  const sub = () => {
    props.sub()
  }
  return (
    <div className="App">
      hello
      <p>redux store中的数据 {props.count}</p>
      <button onClick={add} >修改 store 内数据1</button>
      <button onClick={sub}>修改 store 内数据2</button>
    </div>
  );
}
// 获取 store 数据
const mapStateToProps = (state) => ({
  count: state
})
// 创建发action的函数
const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    add: () => dispatch({ type: ADD }),
    sub: () => dispatch({ type: SUB })
  }
}
// 不想需要获取 store 数据的时候， connect 第一个参数写成 null
export default connect(mapStateToProps, mapDispatchToProps)(App);
