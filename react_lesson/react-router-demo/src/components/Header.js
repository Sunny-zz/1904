import { useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom";


const Header = () => {
  const history = useHistory()
  console.log(useLocation())
  console.log(useRouteMatch())
  // 上面三个和之前的路由prop是一致的
  console.log(useParams())
  // useParams 就是 useRouteMatch 里面的一个属性

  // 以后 Route 组件使用的时候都是 非函数的 children 形式，然后组件内想要使用路由相关的 prop 请使用 hook
  return (
    <header>
      <h3>测试 react-router-dom 的 hook （可以认为只要是 替代 withRouter） </h3>
      {/* useHistory */}
      {/* useLocation */}
      {/* useParams */}
      {/* useRouteMatch */}
      <button onClick={() => history.push('/')}>go home</button>
    </header>
  )
}

export default Header;