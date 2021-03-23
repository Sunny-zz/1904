import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './store'
// import reportWebVitals from './reportWebVitals';

// react-redux 是链接 react  和 redux 的桥梁，那么就需要他去 redux 中取所有 store 数据，共享给所有的 react 组件

// 如何取如何共享
// 1. 从 react-redux 中导入 Provider 组件
// 2. 导入 store 
// 3. 使用 Provider 组件将 store 数据共享给所有组件(App)
// 接下来就是如何在组件中取 store 数据了
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
