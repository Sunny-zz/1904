const TodoFooter = ({ dispatch, filterType, activeNum }) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>{activeNum} item{activeNum !== 1 && 's'} left</span>
        <div className="btns">
          <button style={{ color: filterType === 'all' && 'red' }} onClick={() => dispatch({ type: 'filterType/changeType', filterType: 'all' })}>all</button>
          <button style={{ color: filterType === 'active' && 'red' }} onClick={() => dispatch({ type: 'filterType/changeType', filterType: 'active' })}>active</button>
          <button style={{ color: filterType === 'completed' && 'red' }} onClick={() => dispatch({ type: 'filterType/changeType', filterType: 'completed' })}>completed</button>
        </div>
        <button onClick={() => dispatch({ type: 'todoList/clearCompletedTodo' })}>clear completed</button>
      </div>
    </div>
  );
}

export default TodoFooter;