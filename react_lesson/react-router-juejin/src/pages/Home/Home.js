import { NavLink } from "react-router-dom"
import './home.css'
const Home = () => {
  return (
    <div className='home'>
      <div className="nav-list">
        <NavLink isActive={(match, location) => (location.pathname === '/' || location.pathname === '/recommended') ? true : false} to='/recommended'>推荐</NavLink>
        <NavLink to='/frontend'>前端</NavLink>
        <NavLink to='/backend'>后端</NavLink>
      </div>
    </div>
  );
}

export default Home;