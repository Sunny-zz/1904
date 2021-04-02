import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import AboutPage from './routes/AboutPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route to='/about'>
          <AboutPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
