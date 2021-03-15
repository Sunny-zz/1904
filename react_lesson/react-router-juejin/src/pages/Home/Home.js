import { NavLink, Route, Switch } from "react-router-dom"
import PostList from "../PostList/PostList"
import './home.css'
const Home = () => {
  // const location = useLocation()
  return (
    <div className='home'>
      <div className="nav-list">
        <NavLink isActive={(match, location) => (location.pathname === '/' || location.pathname === '/recommended') ? true : false} to='/recommended'>推荐</NavLink>
        <NavLink to='/frontend'>前端</NavLink>
        <NavLink to='/backend'>后端</NavLink>
      </div>
      {/* 将文章列表组件是否设置成路由页面 */}
      {/* 不做成页面 */}
      {/* <PostList path={location.pathname} /> */}
      {/* 当成页面做成  嵌套路由 */}
      <Switch>
        <Route exact path='/'>
          <PostList />
        </Route>
        <Route path='/:type'>
          <PostList />
        </Route>
      </Switch>
    </div>
  );
}

export default Home;