// import Page from "./components/PageDemo/Page";
import React, { createContext, useState } from 'react'
import ToolBar from "./components/ContextDemo/TooBar";
import Demo1 from './components/DeepJsx/Demo1';
import HookDemo from './components/HookDemo/HookDemo';
import HookDemo1 from './components/HookDemo/HookDemo1';
import UseReducer from './components/HookDemo/UseReducer';
import UseRefDemo from './components/HookDemo/UseRefDemo';
import RenderProp from './components/RenderPropDemo/RenderProp';

// 我们的 hook 都是在函数组件中使用，在函数组件内各种功能首先考虑 hook

// 首先创建一个对应的 context ，使用  createContext 方法， 从创建好的 context 导出两个工具
// Provider 提供者
// Consumer 消费者
// 创建的时候可以指定默认值

export const contextObj = createContext()
// 导出 createContext 的返回值给函数组件内的 useContext 使用
export const { Provider, Consumer } = contextObj;

const contextValue = {
  a: 100
}

// const Demo = () => {
//   return (
//     // 简写
//     <>
//       <td>1</td>
//       <td>2</td>
//     </>
//     // <React.Fragment>
//     //   <td>1</td>
//     //   <td>2</td>
//     // </React.Fragment>
//   );
// }

function App() {
  const [show, setShow] = useState(true)
  // useState 不能再 组件之外执行
  return (
    <div className="App">
      {/* <Page /> */}
      {/* 创建好了 context 之后需要使用 Provider 提供给需要的组件，可以使用 value 传递指定的值 */}
      <Provider value={contextValue} >
        <ToolBar />
      </Provider>
      <hr />
      {/* <table>
        <tbody>
          <tr>
            <Demo />
          </tr>
        </tbody>
      </table> */}
      <Demo1 />
      <hr />
      <button onClick={() => setShow(false)}>修改 show</button>
      {show ? <HookDemo /> : ''}
      <hr />
      <Provider value={contextValue} >
        <HookDemo1 />
      </Provider>
      <hr/>
      <UseReducer />
      <hr/>
      <UseRefDemo />
      <hr />
      <RenderProp />
    </div>
  );
}

export default App;



