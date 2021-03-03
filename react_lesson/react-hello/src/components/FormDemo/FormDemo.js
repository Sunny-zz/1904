import { Component, createRef } from 'react'

class FormDemo extends Component {
  state = {
    inputText: 'react',
    textareaText: '不好好上课，不知道干什么去了',
    selectValue: '2',
    isChecked: false,
    likeFruits: ['橙子']
  }
  // 这个 refInput 就是一个组件内的全局变量，用于存储 input 真实 dom 节点
  refInput = createRef()
  // refInput1 = null 
  render() {
    const { inputText, textareaText, selectValue, isChecked, likeFruits } = this.state
    return (
      <div>
        <h3>受控表单</h3>
        {/* 受控表单  受控组件 */}
        {/* 1. 使用 state 控制对应的内容 */}
        {/* 2. 使用 onChange 修改 state ，如何获取用户输入的内容 需要使用 事件对象 event */}
        {/* <input type="text" value={inputText} onChange={this.handleChangeInput} /> */}
        {/* <input type="text"  value={inputText} onChange={(event) => {
          this.handleChange(event, 'inputText')
        }} /> */}
        <input type="text" value={inputText} name='inputText' onChange={this.handleChange} />
        <p>{inputText}</p>
        <hr />
        {/* <textarea value={textareaText} onChange={this.handleChangeTextarea}></textarea> */}
        {/* <textarea value={textareaText}  onChange={(event) => {
          this.handleChange(event, 'textareaText')
        }}></textarea> */}
        <textarea value={textareaText} name='textareaText' onChange={this.handleChange}></textarea>
        <p>{textareaText}</p>
        <hr />
        {/* 在 react 内 select 可以使用 value 选中对应的 option */}
        {/* <select value={selectValue} onChange={this.handleChangeSelect}> */}
        {/* <select value={selectValue} onChange={(event) => {
          this.handleChange(event, 'selectValue')
        }}> */}
        <select value={selectValue} name='selectValue' onChange={this.handleChange}>
          <option value="1">11</option>
          <option value="2">22</option>
          <option value="3">33</option>
        </select>
        <p>选中的是{selectValue}</p>
        <hr />
        {/* <input checked={isChecked} onChange={this.handleChangeCheckBox} type="checkbox" id="check" /> */}
        {/* <input checked={isChecked} onChange={(event) => {
          this.handleChange(event, 'isChecked')
        }} type="checkbox" id="check" /> */}
        <input checked={isChecked} name='isChecked' onChange={this.handleChange} type="checkbox" id="check" />
        <label htmlFor="check">是否同意准时上课，不能偷懒</label>
        <p>{isChecked ? '同意' : '不同意'}</p>
        <hr />
        <h4>你喜欢的水果有哪些?</h4>
        苹果<input type="checkbox" checked={likeFruits.includes('苹果')} onChange={this.changeFruit} value='苹果' />
        香蕉<input type="checkbox" checked={likeFruits.includes('香蕉')} onChange={this.changeFruit} value='香蕉' />
        菠萝<input type="checkbox" checked={likeFruits.includes('菠萝')} onChange={this.changeFruit} value='菠萝' />
        橙子<input type="checkbox" checked={likeFruits.includes('橙子')} onChange={this.changeFruit} value='橙子' />
        <p>你喜欢的水果有{likeFruits.join()}</p>
        <hr />
        <h3>非受控组件</h3>
        {/* 使用 ref 获取相应的 dom 节点从而获取节点上相关的内容 */}
        <input type="text" ref={this.refInput}  />
        {/* <input type="text" ref={ele => this.refInput1 = ele }  /> */}
        <br />
        <button onClick={this.handleClick}>获取input输入的内容</button>
      </div>
    )
  }
  // handleChangeInput = event => {
  //   // react 事件处理函数内的 event 是经过 react 封装之后的，和原来的 event 使用上没有区别
  //   this.setState({
  //     inputText: event.target.value
  //   })
  // }
  // handleChangeTextarea = event => {
  //   this.setState({
  //     textareaText: event.target.value
  //   })
  // }
  // handleChangeSelect = event => {
  //   this.setState({
  //     selectValue: event.target.value
  //   })
  // }
  // handleChangeCheckBox = event => {
  //   this.setState({
  //     isChecked: event.target.checked
  //   })
  // }
  // handleChange = (event, stateName) => {
  //   const target = event.target
  //   this.setState({
  //     [stateName]: target.type === 'checkbox' ? target.checked : target.value
  //   })
  // }
  handleChange = event => {
    const target = event.target
    this.setState({
      [target.name]: target.type === 'checkbox' ? target.checked : target.value
    })
  }
  changeFruit = (event) => {
    const fruit = event.target.value
    const { likeFruits } = this.state
    // 根据原来的 likeFruits 里面是否存在对当前的 fruit 去作相应的修改操作
    if (!likeFruits.includes(fruit)) {
      this.setState({
        likeFruits: [...likeFruits, fruit]
      })
    } else {
      this.setState({
        likeFruits: likeFruits.filter(ele => ele !== fruit)
      })
    }
  }
  handleClick = () => {
    console.log('获取 input 输入的内容', this.refInput.current.value)
    // console.log('获取 input 输入的内容', this.refInput1.value)
  }
}
export default FormDemo