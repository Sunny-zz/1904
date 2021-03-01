import './App.css';
import Box from './components/Box'
// 函数组件
// 一个函数返回一个 html 结构,只能返回一个节点
function App() {
  return (
    // jsx 内的 html 和原来的 html 的区别
    // 1. class 是用 className 表示
    // 2. 当 jsx 内的 html 内想要写 js 的时候，需要使用 {} 包裹
    <div className="App">
      <h2>hello react</h2>
      <Box />
    </div>
  );
}

export default App;
