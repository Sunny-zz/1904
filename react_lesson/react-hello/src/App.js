import './App.css';
import FormDemo from './components/FormDemo/FormDemo';
// import Box from './components/Box'
// import Content from './components/Content/Content';
// 函数组件
// 一个函数返回一个 html 结构,只能返回一个节点
function App() {
  return (
    // jsx 内的 html 和原来的 html 的区别
    // 1. class 是用 className 表示   for 是用 htmlFor 表示
    // 2. 当 jsx 内的 html 内想要写 js 的时候，需要使用 {} 包裹
    <div className="App">
      <h2>hello react</h2>
      {/* <Box /> */}
      {/* <Content /> */}
      <FormDemo />
    </div>
  );
}

export default App;
