import { Component } from 'react';
import ReactDom from 'react-dom'
class PortalsDemo extends Component {
  // 将接收的 props  children 直接渲染到具体的页面标签上
  render() { 
    // return ReactDom.createPortal(<p>啊哈哈哈哈哈</p>,document.querySelector('body'))
    return ReactDom.createPortal(this.props.children,document.querySelector('body'))
  }
}
 
export default PortalsDemo;