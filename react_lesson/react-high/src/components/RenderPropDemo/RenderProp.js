import React, { Component } from 'react';
import Cat from './Demo/Cat';
// import withMouse from './Demo/withMouse'
import Mouse from './Demo/Mouse';
// import MouseTracker from './Demo/MouseTracker';

const Box1 = () => <div>我是 Box1</div>
const Box2 = () => <div>我是 Box2</div>

const Box = ({render}) => { 
  // 根据一些信息得到数据传递给 render 
  // '?id=1'
  const id = window.location.search.replace('?id=', '')
  console.log(id)
  return render(id * 1)
}

class RenderProp extends Component {
  state = {}
  render() {
    return (
      <div>
        <h3>render prop demo</h3>
        <Box render={data => {
          return data === 1 ? <Box1 /> : <Box2 />
        }} />
        <hr/>
        {/* <MouseTracker /> */}
        {/* render prop 是一个用于告知组件需要渲染什么内容的函数 prop */}
        <Mouse render={mouse => <Cat mouse={mouse} imgSrc='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.duoziwang.com%2Fuploads%2F1707%2F1-1FG02030060-L.gif&refer=http%3A%2F%2Fimg.duoziwang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617938557&t=e1a741cdd151c1efb079d0400499dfd9' />} />
        {/* withMouse 是一个高阶组件，第一个参数需要接收组件，第二个参数是传递给这个组件的 props */}
        <br/>
        <br/>
        <br/>
        {/* {withMouse(Cat)({imgSrc: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fww4.sinaimg.cn%2Flarge%2F9150e4e5jw1fcejbcm6gdg205305jwjt.gif&refer=http%3A%2F%2Fwww.sina.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617938557&t=f297b24bf95e56c6b3540c0ff53cc90b'})} */}
        
      </div>
    );
  }
}

export default RenderProp;