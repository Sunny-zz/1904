import axios from "axios";
import { Component } from 'react';
class PostNew extends Component {
  state = {
    post: null,
    comments: [],
    commentText: ''
  }
  async componentDidMount() {
    const { id } = this.props.match.params
    const res = await axios.all([axios.get(`http://localhost:3008/posts/${id}`), axios.get(`http://localhost:3008/comments?postId=${id}`)])
    // console.log(res)
    this.setState({
      post: res[0].data,
      comments: res[1].data
    })
  }
  addComment = async () => {
    const { commentText, comments } = this.state
    const { id } = this.props.match.params
    if (commentText.trim()) {
      const res = await axios.post('http://localhost:3008/comments', { postId: id, text: commentText })
      this.setState({
        comments: [...comments, res.data],
        commentText: ''
      })
    }
  }
  delComment = async id => {
    const {  comments } = this.state
    const res = await axios.delete(`http://localhost:3008/comments/${id}`)
    // console.log(res)
    if(res.status === 200){
      this.setState({
        comments: comments.filter(comment => comment.id !== id)
      })
    }
  } 
  render() {
    const { post, comments, commentText } = this.state
    return (
      post ? <div>
        <h3>{post.title}</h3>
        <div className='content' dangerouslySetInnerHTML={{ __html: post.cotent }} ></div>
        <div>
          <h4>评论</h4>
          <input type="text" value={commentText} onChange={e => this.setState({ commentText: e.target.value })} />
          <button onClick={this.addComment}>添加</button>
          <div className="comment-list">
            {
              comments.length ? <ul>
                {comments.map(comment => <li key={comment.id}><span>{comment.text}</span><button onClick={()=> this.delComment(comment.id)}>删除</button></li>)}
              </ul> : <div>暂无评论</div>
            }
          </div>
        </div>
      </div> : '请稍等... '
    );
  }
}

export default PostNew;



