import { createElement } from "react";

const Button = (props) => {
  return (createElement('button', {}, '我是父组件传递过来的props:' + props.a));
}

export default Button;