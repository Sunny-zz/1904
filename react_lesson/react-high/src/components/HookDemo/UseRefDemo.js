import { useRef, useState } from 'react'
const UseRefDemo = () => {
  const inputEle = useRef(null)
  const spanEle = useRef(null)
  const [text, setText] = useState('hello')
  return (
    <div>
      <h4>函数组件中使用 useRef </h4>
      <input ref={inputEle} type="text" />
      <br/>
      <span ref={spanEle}>{text}</span>
      <button onClick={()=> setText('world')}>修改 text</button>
      <br/>
      <button onClick={() => {
        inputEle.current.focus()
        console.log(spanEle.current)
      }}>Focus the input</button>
    </div>
  );
}

export default UseRefDemo;