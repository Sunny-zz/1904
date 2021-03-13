import { useContext } from "react";
import { contextObj } from "../../App";

const HookDemo1 = () => {
  const {a} = useContext(contextObj)
  return (
    <div>
      <h4>函数组件使用 useContext 获取 context 提供的数据</h4>
      {a}
    </div>
  );
}

export default HookDemo1;