import { Button, Divider, message, ConfigProvider } from 'antd'
import { VerticalAlignBottomOutlined } from '@ant-design/icons'
import enUS from 'antd/lib/locale/en_US';
import zhCN from 'antd/lib/locale/zh_CN';
import PostList from './PostList/PostList'
import EditTable from './EditTable/EditTable'
import TreeDemo from './TreeDemo/TreeDemo'
import { createContext, useState } from 'react'
import PortalsDemo from './PortalsDemo/PortalsDemo'
import LayoutDemo from './LayoutDemo/LayoutDemo'
const { Provider, Consumer } = createContext({ name: 'Default' });
message.config({
  duration: 0,
  rtl: true
})

function App() {
  const [messageApi, contextHolder] = message.useMessage()
  const [locale, setLocale] = useState(enUS)
  // messageApi 这个包含了 message 的所有 api 其实就是和以前的 message 一样
  // contextHolder  就是弹窗本体，弹窗组件（ReactNode）
  const showMessage = () => {
    // message.info({
    //   // 直接去 Context 中使用 Consumer 获取数据是获取不到最新提供的数据的，需要使用 message 的 hook
    //   content: '普通的提示弹窗',
    //   key: 'normal',
    //   onClose: () => {
    //     console.log('弹窗关闭了')
    //   }
    // })

    // 当 message 方法值传递一个config对象作为参数的话，所有配置都需要加载这个对象内
    messageApi.info({
      // 直接去 Context 中使用 Consumer 获取数据是获取不到最新提供的数据的，需要使用 message 的 hook
      content: <Consumer>{({ name }) => `message 内取到了 Context 的值${name}`}</Consumer>,
      key: 'normal',
      onClose: () => {
        console.log('弹窗关闭了')
      }
    })
  }

  const closeMessage = () => {
    message.destroy('normal')
  }
  const antdConfig = {
    locale,
    autoInsertSpaceInButton: false
  }
  return (
    <Provider value={{ name: 'ant design' }}>
      <div className="App">
        <ConfigProvider {...antdConfig} >
          <Button ghost type='primary' onClick={()=> setLocale(zhCN)}>中文</Button>
          <Button ghost type='primary' onClick={()=> setLocale(enUS)}>英文</Button>
          <Button icon={<VerticalAlignBottomOutlined />} onClick={e => console.log(e)} ghost type="primary" shape='round'>按钮</Button>
          <VerticalAlignBottomOutlined />
          <Divider>分割线</Divider>
          <PostList />
          <Divider>分割线</Divider>
          <EditTable />
          <Divider>分割线</Divider>
          <TreeDemo />
          <Divider>分割线</Divider>
          <h3>message 全局提示练习</h3>
          {contextHolder}
          <Button onClick={showMessage} type='primary'>按钮</Button>
          <Button onClick={closeMessage} type='primary'>关闭</Button>
          <Divider>分割线</Divider>
          <h3> portals 练习</h3>
          <PortalsDemo>
            <p>骄傲哈哈哈</p>
          </PortalsDemo>
          <LayoutDemo>
            <div className='header'>
              <h3 style={{ color: 'red' }}>我是头部内容</h3>
              <span style={{ color: 'green' }}>作者是 xxx</span>
            </div>
            <>
              <p>我是主体内容</p>
              <span>7891793871t23iu</span>
            </>
            <div>我是侧边</div>
            <p>我是底部内容</p>
          </LayoutDemo>
        </ConfigProvider>
      </div>
    </Provider>

  );
}

export default App;
