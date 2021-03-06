import React from 'react';
// React 支持 JSX 语法
import ReactDOM from 'react-dom';
// ReactDOM 实现 DOM 渲染
import './index.css';
// 样式
import App from './App';
// 组件
// import reportWebVitals from './reportWebVitals';

// 利用 ReactDOM 的 render 方法渲染 app 组件到页面的 root 上

// js 内写 html 称之为 JSX 语法
ReactDOM.render(
  // StrictMode  react 的严格模式，检测后代代码中是否存在过时或者不安全问题
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
