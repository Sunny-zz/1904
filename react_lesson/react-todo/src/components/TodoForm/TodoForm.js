import { Component } from 'react';
class TodoForm extends Component {
  state = {
    todoText: ''
  }
  render() {
    const { todoText } = this.state
    const { todos, changeAllTodo } = this.props
    const isAllChecked = todos.every(todo => todo.isCompleted)
    return (
      <div>
        { todos.length !== 0 && <input checked={isAllChecked} type="checkbox" onChange={e => changeAllTodo(e.target.checked)} /> }
        <input value={todoText} onChange={this.handleChange} type="text" />
        <button onClick={this.submit}>提交</button>
      </div>
    );
  }
  handleChange = e => {
    this.setState({
      todoText: e.target.value
    })
  }
  submit = () => {
    const { addTodo } = this.props
    const { todoText } = this.state
    if (todoText.trim()) {
      // 根据 TodoText 更新父组件的 todos
      addTodo(todoText, () => {
        this.setState({
          todoText: ''
        })
      })
    }
  }
}

export default TodoForm;