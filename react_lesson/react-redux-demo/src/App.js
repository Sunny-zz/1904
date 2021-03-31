import PostsContainer from "./containers/PostsContainer";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// BrowserRouter 完全模拟浏览器历史纪录  需要服务器支持，所有地址全部返回 index.html 页面
// HashRouter  锚点模式 
import PostContainer from "./containers/PostContainer";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={PostsContainer} />
          {/* <Route path='/post/:id' component={PostContainer} /> */}
          <Route path='/post/create'>
            <PostContainer />
          </Route>
          <Route path='/post/:id'>
            <PostContainer />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default (App);
