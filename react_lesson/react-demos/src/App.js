// import LifeCycle from "./components/LifeCycle/LifeCycle";
// import MySwiper from "./components/MySwiper/MySwiper";
import { Component } from 'react'
import ArticleComment1 from './components/ArticleComment/ArticleComment1'
// import ModalDemo from './components/Modal/ModalDemo';
// function App() {
//   return (
//     <div>
//       <h2>轮播图demo</h2>
//       <MySwiper />
//       <hr/>
//       <LifeCycle />
//     </div>
//   );
// }
class App extends Component {
  // state = {
  //   show: true
  // }
  render() {
    // const {show} = this.state
    return (
      <div>
        {/* <h2>轮播图demo</h2> */}
        {/* <MySwiper /> */}
        {/* <hr /> */}
        {/* {
        show ? <LifeCycle /> : ''
       }
       <button onClick={()=> this.setState({
         show: !show
       })}>切换show</button> */}
        {/* <h2>对话框</h2> */}
        {/* <ModalDemo /> */}
        <h2>文章评论</h2>
        <ArticleComment1 />
      </div>
    )
  }
}

export default App;
