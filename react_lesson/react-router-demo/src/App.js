import { BrowserRouter as Router, NavLink, Route, Switch, Redirect } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Post from './components/Post'
import './app.css'
import Logo from './components/Logo'
import Header from './components/Header'

// 导入所需要的路由组件，这些组件帮助我们创建路由页面
// BrowserRouter 组件, 是路由的包裹组件。就是路由所有相关的组件和内容必须写在这个组件内, 将需要写的路由内容添加到这个组件的 children 内
// Route 组件，是路由组件，就是负责展示对应的页面
// 该组件接收的props有哪些
// 该组件必须传递两个内容 
// 1. 页面地址 使用 path prop 传递 ,path 匹配规则就是包含
// 2. 展示的组件 可以使用三种方法
// a. 传递 children  该值可以是一个组件，函数(必须返回节点)，普通的节点
// b. 传递 component prop 该值是组件  
// c. 传递 render prop  该值时函数(需返回节点)
// 组件非必须传递的
// 3. exact 将匹配的规则修改成完全匹配
// 如果一个组件是路由组件那么该组件会接收一些路由的 props
// 当使用的是 component prop 传递的组件，组件默认就会接收三个 prop， history  location  match 
// 当使用 render prop 传递组件的时候，需要将 render 函数的参数当作 props 传递给组件，组件内才能接收到 history  location  match  prop
// 当使用的是 children  prop 传递时，当 children 写成属性传递函数时可以将 props 传递给组件、
// 设置动态路由，设置动态路由参数，很多个地址指向同一个路由组件
// Switch 组件管理只能匹配到一个 Route 展示。
// Link 组件实现路由跳转
// NavLink 组件实现路由跳转  可以设置相应的匹配的类名和样式    activeClassName  activeStyle  isActive 
// withRouter 方法，给非路由组件注入路由 prop
// Redirect 重定向组件
// Prompt 
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <hr />
        <Logo />
        {/* NavLink 用来做可以切换样式的 link */}
        {/* 默认的匹配规则是包含匹配  页面地址只要包含 to 的地址就会被激活 */}
        {/* 可以使用 exact prop 将匹配规则替换成严格匹配 */}
        {/* activeClassName 默认的类名就是 active */}
        {/* activeStyle 的值是一个样式对象 */}
        {/* isActive 的值 是一个函数，这个函数接收, match  location 作为参数，而且该函数必须返回一个布尔值,其实这个函数用来提供激活规则的 */}
        <div>
          <NavLink exact activeClassName='nav-active' to='/'>首页</NavLink>
          <br />
          <NavLink isActive={(match, location) => {
            console.log(match, location)
            // 当前(切换之后)的地址栏的信息
            if (location.pathname === '/about') {
              return true
            } else {
              return false
            }
          }} activeStyle={{ color: '#00b3d4' }} to='/about'>关于页</NavLink>
          <br />
          <NavLink to='/oldabout'>去原来的 about 页</NavLink>
        </div>
        <Switch>
          {/* 使用路由重定向 从 oldabout ----> about */}
          <Redirect from="/oldabout" to="/about" />
          {/* 因为所有地址都包含 path 所以首页要写在最后面, 加上了 exact 就不需要了 */}
          <Route exact path='/' component={Home} ></Route>
          {/* <Route exact path='/' render={(props) => <Home {...props} />}></Route> */}
          {/* <Route path='/post/:id' children={({ location, ...rest }) => <Post {...rest} />}></Route> */}
          <Route path='/post/:id' children={({ match, history }) => <Post {...{ match, history }} />}></Route>
          {/* <Route path='/post/:id' children={({ match, history }) => <Post match={match} history={history} />}></Route> */}
          <Route path='/about'>
            <About />
          </Route>
          <Route path='*' render={() => <div>404 页面</div>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
