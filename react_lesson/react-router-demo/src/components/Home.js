import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './home.css'
class Home extends Component {
  render() {
    console.log(this.props)
    // Link 组件 to prop 的写法
    // to = string       to='/post/1'
    // to = object       to={{pathname: '/post/1', search: '问号部分内容', hash:'#部分内容', state:{传递数据}}}  state传递给了 location
    //  to = function   暂时不介绍
    return (
      <div className='home'>
        <h2>文章列表页</h2>
        <ul>
          <li>
            {/* <Link to='/post/1'>第一篇文章</Link> */}
            <NavLink to='post/1'>第一篇文章</NavLink>
          </li>
          <li>
            <Link to={{ pathname: '/post/2', state: { a: 100 } }} >第二篇文章</Link>
          </li>
          <li>
            <Link to='/post/3'>第三篇文章</Link>
          </li>
        </ul>
      </div >
    );
  }
}

export default Home;