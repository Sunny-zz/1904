import { NavLink, Route } from "react-router-dom"
import List from "./List";

const ListPage = () => {
  return (
    <div>
      <hr />
      <br />
      <div>
        <NavLink to='/list/recommended'>推荐</NavLink>
        <span> | </span>
        <NavLink to='/list/frontend'>前端</NavLink>
        <span> | </span>
        <NavLink to='/list/backend'>后端</NavLink>
      </div>
      <br />
      <hr />
      <Route path='/list/:type' component={List} />
      <Route exact path='/list' component={List} />
    </div>
  );
}

export default ListPage;