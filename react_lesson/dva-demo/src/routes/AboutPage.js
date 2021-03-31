import { connect } from 'dva'
import { Component } from 'react'

class AboutPage extends Component {
  componentDidMount(){
    // dispatch 可以发的 action 可以触发 reducers 和 effects 
    this.props.dispatch({type: 'list/getListAsync'})
  }
  render(){
    return ( 
    <div>
      我是关于页
      <span>{this.props.list.length}</span>
    </div>
   );
  }
}
const mapStateToProps = state => ({
  list: state.list
})
export default connect(mapStateToProps)(AboutPage);