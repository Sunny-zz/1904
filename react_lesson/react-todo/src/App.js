import TodoContent from "./components/TodoContent/TodoContent";
import TodoFooter from "./components/TodoFooter/TodoFooter";
import TodoForm from "./components/TodoForm/TodoForm";
import './app.css'
import { Component } from 'react'
class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        todoText: '看面试题',
        isCompleted: true
      },
      {
        id: 2,
        todoText: '打游戏',
        isCompleted: true
      }
    ],
    filterType: 'all',
    editTodoId: 0
  }
  render() {
    const { todos, filterType, editTodoId } = this.state
    return (
      <div className="App">
        <h2>TODO</h2>
        <div className='todo-wrap'>
          <TodoForm changeAllTodo={this.changeAllTodo} todos={todos} addTodo={this.addTodo} />
          {
            todos.length !== 0 && <div>
              <TodoContent changeTodoText={this.changeTodoText} changeEditTodoId={this.changeEditTodoId} filterType={filterType} changeTodo={this.changeTodo} delTodo={this.delTodo} editTodoId={editTodoId} showTodos={this.filterTodos(todos, filterType)} />
              <TodoFooter deleteAllCompletedTodo={this.deleteAllCompletedTodo} changeFilterType={this.changeFilterType} filterType={filterType} activeTodosNum={this.filterTodos(todos, 'active').length} completedTodosNum={this.filterTodos(todos, 'completed').length} />
            </div>
          }
        </div>
      </div>);
  }

  // 根据功能的不同设计一个筛选 todos 的方法
  filterTodos = (todos, filterType) => {
    return todos.filter(todo => filterType === 'all' ? true : filterType === 'active' ? !todo.isCompleted : todo.isCompleted)
  }

  addTodo = (todoText, callBack) => {
    const { todos } = this.state
    this.setState({
      todos: [...todos, { id: new Date().getTime(), todoText, isCompleted: false }]
    })
    callBack()
  }

  delTodo = id => {
    const { todos } = this.state
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    })
  }

  changeTodo = id => {
    const { todos } = this.state
    const new_todos = [...todos]
    // const currentTodo = new_todos.find(todo => todo.id === id)
    // currentTodo.isCompleted = !currentTodo.isCompleted
    // this.setState({
    //   todos: new_todos
    // })
    const x = new_todos.map(todo => {
      if (todo.id === id) {
        const new_todo = { ...todo }
        new_todo.isCompleted = !new_todo.isCompleted
        return new_todo
      } else {
        return { ...todo }
      }
    })
    this.setState({
      todos: x
    })
  }

  changeAllTodo = status => {
    const { todos } = this.state
    this.setState({
      todos: todos.map(todo => {
        const newTodo = { ...todo }
        // if(todo.isCompleted === status){
        //   return newTodo
        // }else{
        //   newTodo.isCompleted = status
        //   return newTodo
        // }
        if (todo.isCompleted !== status) {
          newTodo.isCompleted = status
        }
        return newTodo
      })
    })
  }

  changeFilterType = new_type => {
    this.setState({
      filterType: new_type
    })
  }

  deleteAllCompletedTodo = () => {
    const { todos } = this.state
    this.setState({
      todos: todos.filter(todo => !todo.isCompleted)
    })
  }
  changeEditTodoId = id => {
    this.setState({
      editTodoId: id
    })
  }
  changeTodoText = (id, todoText) => {
    const { todos } = this.state
    this.setState({
      todos: todos.map(todo => {
        const newTodo = { ...todo }
        if (todo.id === id) {
          newTodo.todoText = todoText
        }
        return newTodo
      })
    })
  }
}
export default App


