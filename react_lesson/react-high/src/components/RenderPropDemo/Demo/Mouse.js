import { useState } from "react";

// 功能型的组件，该组件负责获取鼠标坐标，展示相关的组件
const Mouse = ({ render }) => {
  const [pointX, setPointX] = useState(500)
  const [pointY, setPointY] = useState(1000)
  const mouseMoveFun = e => {
    setPointX(e.clientX)
    setPointY(e.clientY)
  }
  const mouseLeaveFun = e => {
    // console.log(111)
    setPointX(500)
    setPointY(1000)
  }
  return (
    <div style={{ height: '500px', border: '1px solid #ccc' }} onMouseLeave={mouseLeaveFun} onMouseMove={mouseMoveFun}>
      {render({ pointX, pointY })}
    </div>
  );
}

export default Mouse;