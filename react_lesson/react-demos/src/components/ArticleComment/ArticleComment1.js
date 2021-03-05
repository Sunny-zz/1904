import React, { Component } from 'react';
import Button from '../Button/Button';
import axios from 'axios'
class ArticleComment extends Component {
  state = {
    comments: [],
    commentText: '',
    isLoading: true
  }
  // componentDidMount() {
  //   // 发送请求获取 comments 数据 更新组件的 state
  //   axios.get('http://localhost:3008/comments').then(res => {
  //     // console.log(res.data)
  //     this.setState({
  //       comments: res.data
  //     })
  //   })
  // }
  async componentDidMount() {
    // 发送请求获取 comments 数据 更新组件的 state
    const res = await axios.get('http://localhost:3008/comments')
    // console.log(res.data)
    this.setState({
      comments: res.data,
      isLoading: false
    })
  }
  render() {
    const { comments, commentText, isLoading } = this.state
    const commentContent = isLoading ? <div>请稍等......</div> : comments.length ? <ul>{comments.map(comment => <li key={comment.id}><span>{comment.text}</span><Button onClick={() => { this.delComment(comment.id) }}>删除</Button></li>)}</ul> : <div>暂无评论请添加</div>
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
  // addComment = () => {
  //   const { commentText, comments } = this.state
  //   if (commentText.trim()) {
  //     // 执行添加评论操作
  //     axios.post('http://localhost:3008/comments', { text: commentText }).then(res => {
  //       // console.log(res.data)
  //       this.setState({
  //         comments: [...comments, res.data],
  //         commentText: ''
  //       })
  //     })
  //   }
  // }
  addComment = async () => {
    const { commentText, comments } = this.state
    if (commentText.trim()) {
      // 执行添加评论操作
      const res = await axios.post('http://localhost:3008/comments', { text: commentText })
      // console.log(res.data)
      this.setState({
        comments: [...comments, res.data],
        commentText: ''
      })

    }
  }
  // delComment = id => {
  //   // 直接使用 window 对象下的属性或方法时需要加上 window
  //   const confirmBool = window.confirm('你真的要删除吗?（无法撤销哦）')
  //   if (confirmBool) {
  //     const { comments } = this.state
  //     axios.delete(`http://localhost:3008/comments/${id}`).then(() => {
  //       this.setState({
  //         comments: comments.filter(comment => comment.id !== id)
  //       })
  //     })
  //   }
  // }
  delComment = async id => {
    // 直接使用 window 对象下的属性或方法时需要加上 window
    const confirmBool = window.confirm('你真的要删除吗?（无法撤销哦）')
    if (confirmBool) {
      const { comments } = this.state
      await axios.delete(`http://localhost:3008/comments/${id}`)
      this.setState({
        comments: comments.filter(comment => comment.id !== id)
      })
    }
  }
}

export default ArticleComment;