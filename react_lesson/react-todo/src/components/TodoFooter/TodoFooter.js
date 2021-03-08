import './todo-footer.css'
const TodoFooter = ({ filterType, changeFilterType, activeTodosNum, deleteAllCompletedTodo, completedTodosNum }) => {
  return (
    <div className="todo-footer">
      <div className="left">
        <span>{activeTodosNum} item{activeTodosNum !== 1 && 's'} left</span>
      </div>
      <div className="mid">
        <button onClick={() => { changeFilterType('all') }} style={{ color: filterType === 'all' ? 'red' : '#000' }}>all</button>
        <button onClick={() => { changeFilterType('active') }} style={{ color: filterType === 'active' ? 'red' : '#000' }}>active</button>
        <button onClick={() => { changeFilterType('completed') }} style={{ color: filterType === 'completed' ? 'red' : '#000' }}>completed</button>
      </div>

      <div style={{width: '80px'}} className='right'>
        {completedTodosNum > 0 && <button onClick={deleteAllCompletedTodo}>completed</button>}
      </div>
    </div>
  );
}

export default TodoFooter;