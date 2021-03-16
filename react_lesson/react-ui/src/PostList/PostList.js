import { Component } from 'react';
import { Pagination } from 'antd'
class PostList extends Component {
  state = {
    arr: [],
    currentPage: 3
  }
  // 数据一共有 200 条， 每次点击分页器获取对应页的数据展示
  componentDidMount() {
    this.getNum(this.state.currentPage, 20)
  }
  change = (page, pageSize) => {
    this.getNum(page, pageSize)
  }
  getNum = (page, pageSize) => {
    setTimeout(() => {
      const newArr = []
      for (let i = (page * pageSize - 20 + 1); i <= page * pageSize; i++) {
        newArr.push(i)
      }
      this.setState({
        arr: newArr,
        currentPage: page
      })
    }, 200);
  }
  itemRender = (current, type, originalElement) =>  {
    console.log(current, type, originalElement)
    if(current === 1 && type === 'page'){
      return <div>第一页</div>
    }
    return originalElement
  }
  render() {
    const { arr, currentPage } = this.state
    return (
      <div>
        这是第{currentPage}页
        {
          arr.length ? <ul>
            {arr.map(num => <li key={num}>{num}</li>)}
          </ul> : ''
        }
        <Pagination
          total={200}
          pageSize={20}
          current={currentPage}
          showSizeChanger={false}
          showQuickJumper
          onChange={this.change}
          itemRender={this.itemRender}
        />
      </div>
    );
  }
}

export default PostList;