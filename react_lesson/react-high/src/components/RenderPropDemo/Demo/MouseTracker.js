import { useState } from "react";

const MouseTracker = () => {
  const [pointX, setPointX] = useState(0)
  const [pointY, setPointY] = useState(0)
  const mouseMoveFun = e => {
    setPointX(e.clientX)
    setPointY(e.clientY)
  }
  return ( 
    <div style={{height: '300px', border: '1px solid #ccc'}} onMouseMove={mouseMoveFun}>
      <h3>移动鼠标</h3>
      <p>鼠标的坐标是({pointX}, {pointY})</p>
    </div>
   );
}
 
export default MouseTracker;