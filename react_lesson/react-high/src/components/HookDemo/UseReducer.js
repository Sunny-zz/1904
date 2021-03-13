import { useReducer } from "react";

// initialState 就是 state 
const initialState = { count: 100 }
// reducer 函数和 useState 内的 setXXX 函数的区别就是，reducer 函数是自己创建的，可以针对 state 进行各种修改， 而 setXxx 是 useState 自带的功能。所以 reducer 函数非常灵活， 适用于比较复杂的 state 数据关系。
const reducer = (state, action) => {
  const { type } = action
  switch (type) {
    case 'add': return { count: state.count + 1 };
    case 'sub': return { count: state.count - 1 };
    default: console.log('出问题了')
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { count } = state
  return (
    <div>
      <h4>使用 useReducer 替换 useState </h4>
      <span>{count}</span>
      <button onClick={() => dispatch({ type: 'add' })}>+</button>
      <button onClick={() => dispatch({ type: 'sub' })}>-</button>
    </div>
  );
}

export default UseReducer;