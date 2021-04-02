import { connect } from "dva";


const TodoItem = ({id, text, isCompleted, dispatch}) => {
  const delTodo = () => {
    dispatch({type: 'todoList/delTodo', id})
  }
  const changeTodo = () => {
    dispatch({type: 'todoList/changeTodo', id})
  }
  return ( 
    <div>
      <span onClick={changeTodo} style={{textDecoration: isCompleted ? 'line-through' : 'none' }}>{text}</span>
      <button onClick={delTodo}>删除</button>
    </div>
   );
}
 
export default connect(null)(TodoItem);