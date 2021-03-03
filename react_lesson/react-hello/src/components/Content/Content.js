import { Component } from 'react'
import './content.css'
class Content extends Component {
  state = {
    show: true,
    arr: ['vue', 'react', 'jquery', '小程序'],
    htmlStr: '<span>huygytfuiu</span>'
  }
  render() {
    const { show, arr, htmlStr } = this.state
    // const showContent = show ? <div className="box"></div> : ''
    // let showContent = ''
    // if(show) {
    //   showContent = <div className="box"></div>
    // }
    // const list = arr.map((ele, index) => <li key={index}>{ele}</li>)
    const listContent = arr.length ? <ul>
      {
        arr.map((ele, index) => <li key={index}>{ele}</li>)
      }
    </ul> : ''
    return (
      <div className='content'>
        <h3>条件渲染</h3>
        {/* 1. 样式的消失和出现  直接使用 state 设置样式 style 或者 class*/}
        <button onClick={this.showBox}>show</button>
        <button onClick={this.hideBox}>hide</button>
        {/* <div style={{ display: show ? 'block' : 'none' }} className="box"></div> */}
        {/* 2. 节点消失和出现 直接利用 js 语法控制 dom 节点 */}
        {
          // jsx 内的 html 里面嵌套的 js 必须最终可以得到一个值
          show && <div className="box"></div>
          // show ? <div className="box"></div> : ''
          // showContent
        }
        <h3>列表渲染</h3>
        {/* 将数组转化成对应的标签数组即可 */}
        {/* 直接将数组放到组件的 html 内是可以直接被渲染的 */}
        {/* <ul>
          {
            // 必须给每一个渲染出来的节点添加一个 key 属性，而且同级节点的 key 的值必须是唯一的
            // arr.map((ele, index) => <li key={index}>{ele}</li>)
            list
          }
        </ul> */}
        {
          listContent
        }
        <h3>渲染 html 字符串</h3>
        <span dangerouslySetInnerHTML={{ __html: htmlStr }}></span>
      </div>
    )
  }
  showBox = () => {
    this.setState({
      show: true
    })
  }
  hideBox = () => {
    this.setState({
      show: false
    })
  }
}
export default Content

// 制作一个代码片段