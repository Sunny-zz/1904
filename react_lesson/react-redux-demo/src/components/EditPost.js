import { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { Form, Input, Button, Spin } from 'antd'
const { TextArea } = Input;
const EditPost = ({ post, getPost, clearPost, editPost, createPost }) => {
  // 虽然父组件是路由组件但是并没有使用可以传递路由prop的写法，就不能直接从 prop 获取路由 prop
  // const { id } = match.params
  // 用路由的 hook 也可以获取对应的地址 id
  const { id } = useParams()
  const history = useHistory()
  // 我们要区分什么时候该组件是创建什时候是编辑
  useEffect(() => {
    clearPost()
    if (id) {
      getPost(id)
    } else {
      setTimeout(() => {
        createPost()
      }, 10)
    }
  }, [getPost, clearPost, createPost, id])

  const onFinish = async value => {
    // console.log(value)
    // console.log(post)
    id ? await editPost({ ...value, id }) : await createPost(value)
    // 编辑或者创建提交之后，需要跳转到首页
    // console.log('跳转首页')
    history.push('/')
  }
  // 全局修改了提示的信息
  // const validateMessages = {
  //   required: '${name} 是必选字段'
  // };
  return (
    post ? (
      <Form initialValues={post} style={{ paddingLeft: 30, width: '80%' }} layout='vertical' onFinish={onFinish}>
        <Form.Item label="Title" name='title' rules={[{
          required: true, message: '标题长度超出', validator: (_, value) => {
            if (value.length < 10) {
              return Promise.resolve();
            }
            return Promise.reject(new Error('长度超出!'));
          }
        }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Author" name='author' rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Content" name='content' rules={[{ required: true }]}>
          <TextArea />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">提交</Button>
        </Form.Item>
      </Form>
    )
      :
      <Spin size="large" />
  );
}

export default EditPost;