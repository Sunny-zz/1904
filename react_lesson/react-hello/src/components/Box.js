// 创建一个 box 组件
// 创建成 class 组件
import { Component } from 'react'
import Button from './Button'
import logo from '../images/logo192.png'
import './box.css'
// import React from 'react'
// class 组件的创建 需要继承 Component 类
// 类内 必须有一个 render 函数，该函数必须返回一个 html 节点
class Box extends Component {
  // 这个 state 就和我们之前 vue 的 data 类似
  state = {
    count: 10
  }
  render() {
    const { count } = this.state
    return (
      <div>
        <button onClick={this.sub}>-</button>
        {/* <span>{this.state.count}</span> */}
        <span>{count}</span>
        <button onClick={this.add}>+</button>
        {/* onClick 事件属性的属性值只能是一个函数 不是函数调用 */}
        <button onClick={() => { this.change(90) }}>修改成指定的数值</button>
        <hr />
        {/* 父组件向子组件传递 props 直接在 子组件的标签上使用属性传递 */}
        <Button text='登录' color='red' />
        <Button text='注册' color='green' />
        <Button />
        <hr />
        <img src={logo} alt="" />
        <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdmimg.5054399.com%2Fallimg%2Fpkm%2Fpk%2F13.jpg&refer=http%3A%2F%2Fdmimg.5054399.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617179412&t=a21c19532a4c65b26f0b7832c30cfdb7" alt="" />
        <div className="box1"></div>
        <svg t="1614587556106" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1668" width="200" height="200"><path d="M836.416 187.754667A457.237333 457.237333 0 0 1 970.666667 512a457.173333 457.173333 0 0 1-127.317334 317.162667l-6.656 6.805333-45.312-45.226667A393.258667 393.258667 0 0 0 906.666667 512a393.173333 393.173333 0 0 0-109.12-272.426667l-6.4-6.570666 45.269333-45.226667zM187.968 187.392l45.226667 45.290667A393.258667 393.258667 0 0 0 117.333333 512a393.173333 393.173333 0 0 0 108.8 272.085333l6.378667 6.549334-45.333333 45.205333A457.237333 457.237333 0 0 1 53.333333 512c0-123.413333 49.024-239.146667 134.613334-324.608z m90.538667 90.474667l45.184 45.312A265.685333 265.685333 0 0 0 245.333333 512c0 69.546667 26.688 134.741333 73.6 183.957333l5.290667 5.397334-45.056 45.44A329.685333 329.685333 0 0 1 181.333333 512c0-89.024 35.392-172.522667 97.173334-234.133333z m467.328 0.32A329.664 329.664 0 0 1 842.666667 512a329.6 329.6 0 0 1-91.157334 227.989333l-5.888 6.037334-45.226666-45.312A265.685333 265.685333 0 0 0 778.666667 512a265.6 265.6 0 0 0-72.853334-183.168l-5.248-5.376 45.269334-45.269333z m-377.578667 90.944l45.397333 45.12A138.112 138.112 0 0 0 373.333333 512c0 35.285333 13.205333 68.394667 36.501334 93.76l4.224 4.394667-45.226667 45.312A202.090667 202.090667 0 0 1 309.333333 512a202.090667 202.090667 0 0 1 58.922667-142.869333z m287.36-0.128A202.090667 202.090667 0 0 1 714.666667 512a202.026667 202.026667 0 0 1-54.016 137.749333l-4.778667 4.992-45.44-45.077333A138.090667 138.090667 0 0 0 650.666667 512a138.026667 138.026667 0 0 0-35.989334-93.184l-4.416-4.650667 45.354667-45.162666zM512 426.666667a85.333333 85.333333 0 1 1 0 170.666666 85.333333 85.333333 0 0 1 0-170.666666z" fill="#000000" p-id="1669"></path></svg>
      </div>
    )
  }
  // react 类组件的事件定义，直接在 class 内部声明方法使用即可
  // 事件的绑定和原生 js 行内事件绑定有点像 <button onClick={this.sub}>-</button>
  // react 的类组件里面的方法除了 render 之外的，其他的方法想要使用 this 的话，需要创建成 箭头函数
  add = () => {
    // console.log('我是加法')
    // 修改 state 不能直接修改需要使用 setState 方法
    // console.log(this)
    this.setState({
      count: this.state.count + 1
    })
    // 在这不能得到最新的 state， 因为 setState 属于异步操作
    console.log(this.state.count)
  }
  sub = () => {
    // console.log('我是减法')
    const { count } = this.state
    if (count > 1) {
      this.setState({
        count: count - 1
      })
    }
  }
  change = (new_count) => {
    // 根据传递过来的参数修改count
    this.setState({
      count: new_count
    })
  }
}
export default Box