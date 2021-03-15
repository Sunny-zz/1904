import { Route, Switch } from "react-router-dom"
import Home from "../../pages/Home/Home"
import Pins from "../../pages/Pins/Pins"
// import Post from "../../pages/Post/Post";
import PostNew from "../../pages/Post/PostNew";

// Main 的主要作用就是放将项目一级页面
const Main = () => {
  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <Switch>
        <Route exact path={['/','/recommended','/frontend', '/backend']}>
          <Home />
        </Route>
        <Route path='/pins'>
          <Pins />
        </Route>
        {/* /post/dhsdf6125 */}
        <Route path='/post/:id' component={PostNew}>
          {/* <Post /> */}
        </Route>
      </Switch>
    </div>
  );
}

export default Main;