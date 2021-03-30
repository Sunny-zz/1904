import { Table, Button, Space, Popconfirm } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
const Posts = ({ posts, delPost, getPosts }) => {
  // console.log(posts)
  const [total, setTotal] = useState(0)

  const getTotal = async () => {
    const res = await axios.get('http://localhost:3000/posts/total')
    setTotal(res.data.total)
  }
  useEffect(() => {
    getTotal()
  }, [])
  // 控制表格的每一列
  const columns = [
    {
      title: 'Id',
      // title 是第一列的表头文字
      dataIndex: 'id',
      // dataIndex 数据的属性
      key: 'id',
      render: id => <span>{id}</span>,
      // render 自定义的渲染内容  text 接收的就是 对应的数据也就是 id
    },
    {
      title: 'Author',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      // 要设置成跳转页面的链接
      render: (title,record) => <Link to={`/post/${record.id}`}>{title}</Link>
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <Space size='middle'>
          <Button type='primary' size='small'>Edit</Button>
          <Popconfirm
            title="是否确定删除吗?"
            onConfirm={async () => {
              await delPost(record.id)
              getTotal()
            }}
            okText="是"
            cancelText="否">
            <Button type='primary' danger size='small'>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const content = posts.length ? <div>
    <Link to='post/create'>
      <Button type='primary'>创建文章</Button>
    </Link>
    {
      <Table
        pagination={{
          showSizeChanger: true,
          showQuickJumper: true,
          total: total,
          showTotal: (total, range) => {
            // console.log(total)
            return `一共 ${total} 条`
          },
          onChange: page => getPosts(page)
        }} style={{ width: '85%' }} rowKey="id" columns={columns} dataSource={posts} />
      // 当 dataSource 里面对象内没有 key 属性的时候，可以使用 rowKey 去设置关键字属性名
    }
  </div> : <div>请稍等...</div>
  return (
    <div>
      {content}
    </div>
  );
}

export default Posts;