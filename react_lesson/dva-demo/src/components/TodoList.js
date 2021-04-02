import TodoItem from "./TodoItem";

const TodoList = ({list}) => {
  return ( 
    <div>
      {
       list.map(todo => <TodoItem key={todo.id} {...todo} />) 
      }
    </div>
   );
}
 
export default TodoList;