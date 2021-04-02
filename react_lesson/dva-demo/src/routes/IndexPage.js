import { NavLink, Route } from "react-router-dom"
import HomePage from "./HomePage";
import ListPage from "./ListPage";

const IndexPage = ({ history }) => {
  const goHome = () => {
    history.push('/')
  }
  return (
    <div>
      <h2 onClick={goHome}>我是logo</h2>
      <div className="nav">
        <NavLink to='/todo'>待办事项</NavLink>
        <span> | </span>
        <NavLink to='/list'>列表</NavLink>
      </div>
      <Route path='/todo' component={HomePage} />
      <Route path='/list' component={ListPage} />
      <Route exact path='/' render={() => <h1>我是首页</h1>} />
    </div>
  );
}

export default IndexPage;