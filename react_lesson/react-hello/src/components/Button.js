import { Component } from 'react'
import PropTypes from 'prop-types'
import './button.css'
// 所有组件的样式都是全局的

// 这个 PropTypes 只提供校验规则
class Button extends Component{
  render(){
    // 当父组件传递了 props 时
    // 子组件的实例上的 props 属性就会接收父组件传递过来的 props 对象
    // console.log(this.props)
    const { text, color } = this.props
    const styleObj = {
      color
    }
    const className = text === '登录' ? 'btn login' : text === '注册' ? 'btn signin' : 'btn'
    return (
      // <button>{text ? text : '按钮'}</button>
      // react 的 jsx 内的行内样式 style 必须写成一个对象
      <button style={ styleObj } className={ className }>{text}</button>
    )
  }
}
export default Button

// 给 Button 组件的 props 添加校验
Button.propTypes = {
  text: PropTypes.string
  // text: PropTypes.oneOf(['登录','注册'])
};
// 给 Button 组件的 props 设置默认值
Button.defaultProps = {
  text: '按钮',
  color: 'white'
}


// 函数组件接收的 props 使用函数的第一个参数接收
// function Button(props) {
//   console.log(props)
//   const { text } = props
//   return (
//     <button>{text}</button>
//   )
// }
// export default Button
// 函数组件的 props 验证直接写到函数名上


// 无论是函数组件还是类组件的 props,时只读属性 都不允许修改