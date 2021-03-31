import { Link } from "dva/router"
import { connect } from 'dva'
import { Component } from 'react'

class IndexPage extends Component {
  state = {
    num: ''
  }
  add = () => {
    this.props.dispatch({ type: 'count/add' })
  }
  set = () => {
    // console.log(this.state.num)
    this.props.dispatch({type: 'count/setCount', data: this.state.num })
  }
  handleInput = e => {
    this.setState({
      num: e.target.value
    })
  }
  render() {
    return (
      <div>
        我是首页
        <Link to={{ pathname: '/about' }} >
          去 about 页
        </Link>
        <p>dva model 中的 count 模块数据: {this.props.count}</p>
        <button onClick={this.add}>add</button>
        <input value={this.state.num} onChange={this.handleInput} type="text" />
        <button onClick={this.set}>set</button>
      </div>
    );

  }
}

const mapStateToProps = state => ({
  count: state.count
})
export default connect(mapStateToProps)(IndexPage);
