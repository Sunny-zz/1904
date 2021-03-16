import { Route, Switch } from "react-router-dom"
import Home from "../../pages/Home/Home"
import NotFound from "../../pages/NotFound/NotFound";
import Pins from "../../pages/Pins/Pins"
// import Post from "../../pages/Post/Post";
import PostNew from "../../pages/Post/PostNew";

// 使用 react-router-dom 注意点
// 1. 路由组件接收路由 prop (match, history, location) 的不同方式
// 2. 非路由组件使用路由 prop ，路由 hook 或者 withRouter 实现
// 3. NavLink 组件 isActive 属性控制激活样式
// 4. Link 组件 to 可以传递参数
// 5. 路由 hook 的使用
// 6. 在 react 的函数组件中，存储可变化数据(prop router state ...) ,使用 useRef ,利用 useRef 获取上一个 location 相关数据

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
        <Route path='*' >
          <NotFound />
        </Route>
        {/* 将所有错误地址重新指向到 /error */}
        {/* <Route path='/error' >
          <NotFound />
        </Route> */}
        {/* <Redirect from='*'  to='/error' /> */}
      </Switch>
    </div>
  );
}

export default Main;