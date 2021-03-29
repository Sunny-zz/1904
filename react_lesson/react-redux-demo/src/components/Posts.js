import { Table, Button, Space, Popconfirm } from 'antd';

const Posts = ({ posts, delPost, getPosts }) => {
  // console.log(posts)

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
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <Space size='middle'>
          <Button type='primary' size='small'>Edit</Button>
          <Popconfirm
            title="是否确定删除吗?"
            onConfirm={() => delPost(record.id)}
            okText="是"
            cancelText="否">
            <Button type='primary' danger size='small'>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const content = posts.length ? <ul>
    {
      <Table
        pagination={{
          showSizeChanger: true,
          showQuickJumper: true,
          total: 2000,
          showTotal: (total, range) => {
            // console.log(range)
            return `一共 ${total} 条`
          },
          onChange: page => getPosts(page)
        }} style={{ width: '85%' }} rowKey="id" columns={columns} dataSource={posts} />
      // 当 dataSource 里面对象内没有 key 属性的时候，可以使用 rowKey 去设置关键字属性名
    }
  </ul> : <div>请稍等...</div>
  return (
    <div>
      {content}
    </div>
  );
}

export default Posts;