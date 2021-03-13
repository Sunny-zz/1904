import { Route, Switch } from "react-router-dom"
import Home from "../../pages/Home/Home"
import Pins from "../../pages/Pins/Pins"

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
      </Switch>
    </div>
  );
}

export default Main;