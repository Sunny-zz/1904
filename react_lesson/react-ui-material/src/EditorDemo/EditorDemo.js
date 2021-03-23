import { Component } from 'react';
import './editor-demo.scss'
import E from 'wangeditor'

class EditorDemo extends Component {
  componentDidMount() {
    this.editor = new E('#toolbar-container', '#text-container')
    this.editor.config.heiwght = 200
    this.editor.config.focus = false
    console.log(this.editor.config.menus)
    // 配置菜单栏，删减菜单，调整顺序
    // this.editor.config.menus = [
    //   'bold',
    //   'head',
    //   'link',
    //   'italic',
    //   'underline',
    //   'image'
    // ]
    
    // 配置 onchange 回调函数
    this.editor.config.onchange = function (newHtml) {
      console.log('change 之后最新的 html', newHtml)
    }
    // 配置触发 onchange 的时间频率，默认为 200ms

    this.editor.config.onchangeTimeout = 1500 // 修改为 500ms
    // 修改的触发事件不生效
    this.editor.create()
  }
  btnClick = () => {
    this.editor.txt.html('<p>哈哈哈哈</p>')
  }
  btn1Click = () => {
    this.editor.txt.append('<p>哈哈哈哈</p>')
  }
  submit = () => {
    console.log(this.editor.txt.html())
    console.log(this.editor.txt.getJSON())
  }
  render() {
    return (
      <div>
        <h3>wangEditor 的使用</h3>
        <button onClick={this.btnClick}>按钮</button>
        <button onClick={this.btn1Click}>按钮1</button>
        <div id="toolbar-container" className="toolbar"></div>
        <p>------ 我是分割线 ------</p>
        <div id="text-container" className="text">
        </div>
        <button onClick={this.submit}>提交</button>
      </div>
    );
  }
}

export default EditorDemo;