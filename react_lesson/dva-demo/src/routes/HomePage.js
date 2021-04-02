import TodoFooter from "../components/TodoFooter"
import TodoHeader from "../components/TodoHeader";
import TodoList from "../components/TodoList";
import { connect } from "dva";
import { useEffect } from "react";
import getShowList from "../utils/getShowList";
const HomePage = ({ list, dispatch, filterType }) => {
  // console.log(dispatch)
  useEffect(() => {
    dispatch({ type: 'todoList/getListAsync' })
  }, [])
  return (
    <div style={{ width: '70%', margin: '0 auto' }}>
      <h1>TODO</h1>
      <TodoHeader dispatch={dispatch}/>
      {
        list.length ? <>
          <TodoList list={getShowList(list, filterType)} />
          <TodoFooter activeNum={getShowList(list, 'active').length} filterType={filterType} dispatch={dispatch} />
        </> : null
      }
    </div>
  );
}
const mapStateToPros = state => ({
  list: state.todoList,
  filterType: state.filterType
})
export default connect(mapStateToPros)(HomePage);