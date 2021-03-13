import { withRouter } from "react-router-dom"

const Logo = (props) => {
  console.log(props)
  return ( 
    // 如果该组件想要使用路由相关的props也就是 location  match  history，但是这个组件又不是路由组件
    // 此时可以使用 withRouter 高阶组件实现  导出组件的时候 使用 withRouter 包裹
    <span onClick={()=> props.history.push('/')}>logo</span>
   );
}
 
export default withRouter(Logo);