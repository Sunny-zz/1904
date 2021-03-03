import { Component } from 'react'
import PropTypes from 'prop-types'
import './modal.css'
import Button from '../Button/Button'
class Modal extends Component {
  // 我这个组件的出现和消失并不是组件内部的 state 控制的，而是需要父组件传递对应的 props 去控制，所以这个 props 需要定义好
  render() {
    const { visible, onClose, onOk, onCancle, title, children, okText, cancleText } = this.props
    // console.log(children)
    // 根据 visible 控制滚动条的出现和消失
    if(visible){
      // 消失
      document.body.style.overflow = 'hidden'
      document.body.style.width = 'calc(100% - 17px)'
    }else{
      // 出现
      document.body.style.overflow = ''
      document.body.style.width = ''
    }
    return (
      <div className='modal-wrap' style={{ display: visible ? 'block' : 'none' }}>
        <div className="modal-mask" onClick={onClose}></div>
        <div className="modal">
          <div className="modal-header">
            <h3>{title}</h3>
            <span onClick={onClose}>x</span>
          </div>
          <div className="modal-content">
            {/* 这个内容部分展示的东西很不确定，父组件想展示什么就展示什么，那么就需要使用 props 的 children 传递 */}
            {children}
            {/* {children.find(ele=> ele.props.className === 'box')} */}
          </div>
          <div className="modal-footer">
            <div className="btns">
              <Button type='primary' onClick={onOk}>{okText}</Button>
              <Button onClick={onCancle}>{cancleText}</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;

Modal.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  onOk: PropTypes.func,
  onCancle: PropTypes.func
}

Modal.defaultProps = {
  visible: false,
  cancleText: '取消',
  okText: '确定'
}