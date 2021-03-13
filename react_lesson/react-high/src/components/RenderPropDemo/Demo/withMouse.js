import Mouse from "./Mouse"
//  withMouse 是一个函数，该函数接收一个组件作为参数，所以这个参数名必须首字母大写
const withMouse = (Component) => (props) => <Mouse render={mouse => <Component mouse={mouse} {...props} />} />

export default withMouse