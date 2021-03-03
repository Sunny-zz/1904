import { Component } from 'react';
import './button.css'
class Button extends Component {
  render() {
    const { children, type, onClick } = this.props
    return (
      <button onClick={onClick} className={`btn${type === 'primary' ? ' primary' : ''}`}>{children}</button>
    );
  }
}

export default Button;