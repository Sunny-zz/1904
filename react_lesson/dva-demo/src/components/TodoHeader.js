
import { useState } from "react";

const TodoHeader = ({dispatch}) => {
  const [text, setText] = useState('')
  const addTodo = () => {
    dispatch({type: 'todoList/addTodo', todo: {id: new Date().getTime(), text, isCompleted: false} })
    // console.log('清空')
    setText('')
  }
  return ( 
    <div>
      <input value={text} type="text" onChange={e => setText(e.target.value)} />
      <button onClick={addTodo}>提交</button>
    </div>
   );
}
 
export default TodoHeader;