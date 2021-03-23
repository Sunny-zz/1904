// StyledComponentsDemo
// 制作样式组件
import styled, { keyframes } from 'styled-components'
const Title = styled.h2`
font-size: ${({ fontSize }) => fontSize + 'px'};
text-align: center;
color: palevioletred;
`;
// 普通的按钮样式组件
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  &:hover {
    color: red;
  }
  &.active{
    color: blue;
  }
`;
// 继承样式组件
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;
// 也可以继承 render 函数或者叫 react 函数组件
const Link = ({ className, children }) => (
  <a className={className} href='http://baidu.com'>
    {children}
  </a>
);

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;
// 给样式组件设置默认值
const Input = styled.input.attrs(({ size, type }) => ({
  // 将 type 设置成 text
  type: type || "text",
  // 不传递 size 默认设置成 1em
  size: size || "1em",
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  /* 直接使用 size  prop ，如果没传递就是 1em */
  margin: ${({ size }) => size};
  padding: ${({ size }) => size};
`;
// 覆盖默认的 prop   type 
const PasswordInput = styled(Input).attrs({
  type: "password",
})`
  border: 2px solid aqua;
`;
// 动画
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;
const StyledComponentsDemo = () => {
  return (
    <div>
      <h3>StyledComponents 的使用</h3>
      <Title fontSize={40} onClick={() => console.log(11111)}>
        hello，world
      </Title>
      {/* as 可以替换标签 也可以替换成其他的样式组件 */}
      <Button as='span'>普通按钮</Button>
      <Button className='active' as={TomatoButton}>普通按钮1 </Button>
      <TomatoButton>继承的按钮</TomatoButton>
      <Link>普通的 link </Link>
      <StyledLink>带样式的l ink</StyledLink>
      <Input type='password' placeholder="A small text input" />
      <br />
      <Input placeholder="A bigger text input" size="2em" />
      <br />
      <PasswordInput></PasswordInput>
      <br/>
      <Rotate >&lt; 💅🏾 &gt;</Rotate>
    </div>
  );
}

export default StyledComponentsDemo;