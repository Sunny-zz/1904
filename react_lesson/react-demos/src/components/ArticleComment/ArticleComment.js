import React, { Component } from 'react';
import Button from '../Button/Button'
class ArticleComment extends Component {
  state = {
    comments: [
      {
        id: 1,
        text: '666'
      }
    ],
    commentText: ''
  }
  render() {
    const { comments, commentText } = this.state
    const commentContent = comments.length ? <ul>{comments.map(comment => <li key={comment.id}><span>{comment.text}</span><Button onClick={() => { this.delComment(comment.id) }}>删除</Button></li>)}</ul> : <div>暂无评论请添加</div>
    return (
      <div>
        <h3>文章标题</h3>
        <p>文章内容</p>
        <h4>文章评论</h4>
        <input value={commentText} onChange={this.handleInput} type="text" />
        <Button type='primary' onClick={this.addComment} >添加</Button>
        { commentContent}
      </div>
    );
  }
  handleInput = event => {
    this.setState({
      commentText: event.target.value
    })
  }
  addComment = () => {
    const { commentText, comments } = this.state
    if (commentText.trim()) {
      // 执行添加评论操作
      this.setState({
        comments: [...comments, { id: new Date().getTime(), text: commentText }],
        commentText: ''
      })
    }
  }
  delComment = id => {
    const { comments } = this.state
    this.setState({
      comments: comments.filter(comment => comment.id !== id)
    })
  }
}

export default ArticleComment;