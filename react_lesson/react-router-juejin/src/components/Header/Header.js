import { NavLink, useHistory } from "react-router-dom"
import './header.css'
const Header = () => {
  const history = useHistory()
  const types = ['/','/recommended','/frontend', '/backend'] 
  return (
  <header>
    <img onClick={()=> history.push('/')} src="https://sf3-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/logo.a7995ad.svg" alt=""/>
    <NavLink isActive={(match, location) => types.includes(location.pathname) } to='/'>首页</NavLink>
    <NavLink to='/pins'>沸点</NavLink>
  </header>
  );
}

export default Header;