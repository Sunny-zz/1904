import TodoItem from "../TodoItem/TodoItem"

const TodoContent = ({showTodos, ...otherProps}) => {
  const content = <ul>
    {props.showTodos.map(todo => <TodoItem key={todo.id}  {...todo} {...otherProps} />)}
  </ul>
  return (
    <div className='todo-content'>
      {content}
    </div>
  );
}

export default TodoContent;