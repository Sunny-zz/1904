import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
const Post = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [comments, setComments] = useState([])

  useEffect(() => {
    const getPost = async () => {
      const resPost = await axios.get(`http://localhost:3008/posts/${id}`)
      setPost(resPost.data)
      // console.log(id)
      // const resComments = await axios.get(`http://localhost:3008/comments/?postId=${id}`)
      // setComments(resComments.data)
    }
    getPost()
  }, [])
  return (
    post ? <div>
      <h3>{post.title}</h3>
      <div className='content' dangerouslySetInnerHTML={{ __html: post.cotent }} ></div>
      <div>
        <h4>评论</h4>
        <input type="text" />
        <button>添加</button>
        <div className="comment-list">
          {
           comments.length ? <ul>
             { comments.map(comment => <li key={comment.id}>{comment.text}</li> )}
           </ul> : <div>'暂无评论'</div>
          }
        </div>
      </div>
    </div> : '请稍等... '
  );
}

export default Post;