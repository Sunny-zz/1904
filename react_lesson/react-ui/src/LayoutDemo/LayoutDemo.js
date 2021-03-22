import { Layout } from 'antd'
const { Header, Footer, Sider, Content } = Layout;
const LayoutDemo = ({children}) => {
  return (
    <Layout>
      <Header style={{lineHeight: 'inherit'}}>{children.find(item => item.props.className === 'header')}</Header>
      <Layout>
        <Content>{children[1]}</Content>
        <Sider>Sider</Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default LayoutDemo;