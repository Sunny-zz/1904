import { Component } from 'react'
import Button from '../Button/Button'
import Modal from './Modal'
class ModalDemo extends Component {
  state = {
    visible: false,
    arrText: ['bla...', 'bla...', 'bla...']
  }
  render() {
    const { visible, arrText } = this.state
    const content = arrText.map((text, index) => <p key={index}>{text}</p>)
    return (
      <div>
        {/* 父子组件(父组件想要修改子组件的状态)*/}
        {/* 解决方案是状态(state)提升,将子组件状态提升到父组件，然后当作 props 传递给子组件 */}
        {/* 当子组件也需要修改这个 state 的时候 */}
        <Button onClick={this.showModal} >打开</Button>
        <Modal title='标题' contentText='123123' visible={visible} onClose={this.handleColse} onOk={this.handleOk} onCancle={this.handleCancle} okText='confirm' cancleText='cancle' >
          {content}
          {/* <div className="box">1</div>
          <div className="box1">2</div> */}
        </Modal>
      </div>
    );
  }
  showModal = () => {
    this.setState({
      visible: true
    })
  }
  handleColse = () => {
    this.setState({
      visible: false
    })
  }
  // modal 内的确定和取消按钮并不是只有关闭 modal 操作，还可能需要一些额外的操作，这些额外的操作肯定是父组件提供的
  handleOk = () => {
    console.log('执行一些确定按钮需要做的事')
    this.handleColse()
  }
  handleCancle = () => {
    console.log('执行一些取消按钮需要做的事')
    this.handleColse()
  }
}

export default ModalDemo;