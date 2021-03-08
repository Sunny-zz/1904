import TodoItem from "../TodoItem/TodoItem"

const TodoContent = (props) => {
  const content = <ul>
    {props.showTodos.map(todo => <TodoItem key={todo.id}  {...todo} {...props} />)}
  </ul>
  return (
    <div className='todo-content'>
      {content}
    </div>
  );
}

export default TodoContent;