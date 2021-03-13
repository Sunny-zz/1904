
// const handleChange = e => {
//   console.log(e)
// }
import { createRef } from 'react'
const handleDelete = (id, delTodo) => {
  // console.log(id)
  if (window.confirm('是否真的删除吗?')) {
    delTodo(id)
  }
}
const checkboxRef = createRef()
const TodoItem = ({ id, todoText, isCompleted, delTodo, changeTodo, editTodoId, changeEditTodoId, changeTodoText }) => {
  const completedStyle = {
    textDecoration: 'line-through',
    color: '#ccc'
  }
  return (
    <li style={{ userSelect: 'none' }}>
      {
        editTodoId === id ? <input autoFocus ref={checkboxRef} onBlur={e => {
          changeEditTodoId(0)
          // 当失去焦点的时候如果输入内容为空直接删除此条数据
          if(!e.target.value.trim()){
            delTodo(id)
          }
        }} value={todoText} onChange={e => {
          changeTodoText(id, e.target.value)
        }} type="text" /> : <div>
          <input checked={isCompleted} type="checkbox" name="" id="" onChange={() => changeTodo(id)} />
          <span onDoubleClick={() => {
            changeEditTodoId(id)
          }} style={isCompleted ? completedStyle : {}}>{todoText}</span>
          <button onClick={() => handleDelete(id, delTodo)}>删除</button>
        </div>
      }
    </li>
  );
}

export default TodoItem;