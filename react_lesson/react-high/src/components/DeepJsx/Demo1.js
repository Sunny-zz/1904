import { Component, createElement } from 'react';
import Button from './Button';
// createElement 是一个方法，该方法的作用就是创建一个 react 节点
// JSX 语法是 createElement 的语法糖，当你的环境构建不需要支持 jsx， 就不能使用 JSX 语法就需要使用 createElement
class Demo1 extends Component {
  state = {
    count: 100
  }
  render() {
    return (
      // createElement（type, props, children）
      // type 可以是 html 标签名 也可以是组件
      // props 就是标签的属性对象
      // children 是标签内的内容，可以使字符串也可以是数组
      // <Button a={10}></Button>
      createElement('div', { className: 'demo1' }, [
        createElement(Button, { a: this.state.count ,key: 1}),
        createElement('br', { key: 2 }),
        '我是demo1案例内的state:' + this.state.count,
        createElement('br', { key: 4 }),
        createElement('button', { onClick: this.handleClick, key: 3 }, '按钮add')
      ])
    )
  }
  handleClick = () => {
    this.setState({
      count: 200
    })
  }
}

export default Demo1