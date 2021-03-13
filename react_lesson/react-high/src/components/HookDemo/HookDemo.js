
// Hook 
// Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。
import { useState, useEffect } from 'react'
// useState 是一个方法，该方法可以创建 state 并且定义相应的 state 修改方法
// useState 需要传递一个默认的 state 初始值作为参数



// let run = 0
// let time = 0
const HookDemo = () => {
  //  useEffect 只要是声明了，不管哪一个 state 的变化都会影响所有的 useEffect 执行
  let [count, setCount] = useState(10)
  // 声明多个 useEffect 时候每次更新都会调用所有的 useEffect ，而且是按照声明的顺序， 我们可以给 useEffect 添加第二个参数来控制这个 useEffect 只负责监听对应的 state，这个也 effect 清除函数起作用
  useEffect(()=>{
    console.log('我是第一个 effect 监听 count')
  }, [count])
  // count 就是一个 state ,  setCount 就是修改的方案
  // setCount 是一个方法 该方法传递新的 state 作为参数
  const [a, setA] = useState(100)
  const [todos, setTodos] = useState([{id: 1, text: '学习 react hook'}, {id: 2, text: '学习 vue3.0'}])
  const [text, setText] = useState('')

  useEffect(() => {
    // 页面初始渲染的时候执行
    // 修改 state 的时候执行
    // 在这获取的 dom 节点其实是渲染完毕的
    console.log(a)
    // console.log(document.querySelector('.test'))
    // run = setInterval(()=>{
    //   time ++ 
    //   console.log('计时器正在执行' + time)
    // } ,1000)
    // effect 的清除机制， 需要给 useEffect 内的函数 返回一个函数，这个返回的函数初始的时候不会触发，但是每次修改的时候都会触发， 可以将 这个函数比作类组件内的 componentWillUnMount 钩子
    // return () => {
    //   console.log('清除')
    //   clearInterval(run)
    // }
  })
  return (
    <div>
      <h2>hook 的简单使用</h2>
      <hr />
      <span className='test'>hook创建的 state count:{count}</span>
      <button onClick={() => {
        setCount(count + 1) 
      }}>add</button>
      <hr />
      <span>{a}</span>
      <button onClick={() => setA(a + 1)}>add</button>
      <hr/>
      <ul>
        {
          todos.map(todo => <li key={todo.id}>{todo.text}</li> )
        }
      </ul>
      <input type="text" value={text} onChange={e => setText(e.target.value) } />
      <button onClick={()=> setTodos([...todos, {id: 3, text}])}>提交</button>
    </div>
  );
}

export default HookDemo;