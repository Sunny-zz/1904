import { useSelector, useDispatch } from "react-redux";
import {add, sub} from '../actions'
import Button from "./Button";
const Count = () => {
  const count = useSelector(state => {
    // console.log(state)
    return state.count
  })
  const dispatch = useDispatch()
  // 这个 dispatch 就相当于 store.dispatch
  // 因为没有了 connect 就不能使用 mapDispatchToProps 处理 action 创建函数
  // 只能直接调用 action 创建函数， 通过 dispatch 发出
  // console.log(count)
  return ( 
    <div>
      <h3>使用 reactredux 中的 hook</h3>
      {/* 我们要使用 hook 获取 store 数据 count */}
      {/* useSelector 就可以获取 redux store 中的数据 , 需要搭配 Provider */}
      <span>store 中的数据 count: { count }</span>
      <br/>
      {/* <button onClick={()=> dispatch(add())}>add</button> */}
      {/* <button onClick={()=> dispatch(sub())}>sub</button> */}
      <Button onClick={()=> dispatch(add())}>add</Button>
      <Button onClick={()=> dispatch(sub())}>sub</Button>
    </div>
   );
}
 
export default Count;