import { Button, Divider } from 'antd'
import { VerticalAlignBottomOutlined } from '@ant-design/icons'
import PostList from './PostList/PostList'

function App() {
  return (
    <div className="App">
      按钮
      <Button icon={<VerticalAlignBottomOutlined />} onClick={e => console.log(e)} ghost type="primary" shape='round'>按钮</Button>
      <VerticalAlignBottomOutlined />
      <Divider >分割线</Divider>
      <PostList />
    </div>
  );
}

export default App;
