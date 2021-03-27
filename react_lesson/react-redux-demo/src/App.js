// 直接使用 connect 测试是否可以获取 store 内的 posts 数据
import { useEffect } from "react";
import { connect } from "react-redux";
import axios from 'axios'
function App({posts}) {
  console.log(posts)
  useEffect(()=> {
    axios.get('https://www.test.com').then(res => {
      console.log(res.data)
    })
  }, [])
  return (
    <div className="App">
      hello
    </div>
  );
}

const mapStateToProps = state =>({
  posts: state.posts
})
export default connect(mapStateToProps)(App);
