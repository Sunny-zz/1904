// 通过 Provider 的提供，所有后代组件都可以获取对应的 context 内容

import { Consumer } from '../../App';

const Button = () => {
  return (
    <Consumer>
      {
        contextValue => <button>{contextValue.a}</button>
      }
    </Consumer>
  );
}

export default Button;

// class Button extends Component {
//   // 后代组件想要使用 Provider 提供的数据
//   // 需要使用 Consumer 获取
//   // Consumer 使用给的时候 需要传递一个函数，返回值时展示的内容，函数的参数是提供 context
//   render() {
//     return (
//       <Consumer>
//         {
//           contextValue => <button>{contextValue}</button>
//         }
//       </Consumer>
//     );
//   }
// }

// export default Button;