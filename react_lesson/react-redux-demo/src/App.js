import PostsContainer from "./containers/PostsContainer";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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
