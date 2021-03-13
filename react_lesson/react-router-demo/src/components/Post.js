const Post = ({match, history}) => {
  console.log(match, history)
  console.log(match.params.id)
  return ( 
    <div>
      <button onClick={()=> history.push('/') }>返回首页</button>
      <button onClick={()=> history.goBack() }>返回</button>
      <h2>我是文章详情</h2>

    </div>
   );
}
 
export default Post;