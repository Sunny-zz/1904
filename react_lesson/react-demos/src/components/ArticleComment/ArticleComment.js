import React, { Component } from 'react';
import Button from '../Button/Button';
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
    const commentContent = comments.length ? <ul>{comments.map(comment => <li key={comment.id}><span>{comment.text}</span><Button>删除</Button></li> )}</ul> : <div>暂无评论请添加</div>
    return (
      <div>
        <h3>文章标题</h3>
        <p>文章内容</p>
        <h4>文章评论</h4>
        <input value={ commentText } onChange={this.handleInput} type="text"/>
        <Button type='primary'>添加</Button>
        { commentContent }
      </div>
    );
  }
  handleInput = event => {
    this.setState({
      commentText: event.target.value
    })
  }
}

export default ArticleComment;