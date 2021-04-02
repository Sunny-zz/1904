import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';

// 大页面配置
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path='/' component={IndexPage}></Route>
    </Router>
  );
}

export default RouterConfig;
