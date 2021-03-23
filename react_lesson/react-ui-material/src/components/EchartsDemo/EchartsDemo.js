// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';
// 引入柱状图图表，图表后缀都为 Chart
import {
  BarChart
} from 'echarts/charts';
// 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent
} from 'echarts/components';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import {
  CanvasRenderer
} from 'echarts/renderers';
import { useEffect, useState } from 'react';

// 一. 按需引入四大类 1. 核心  2. 表的类型  3. 小组件  4. 渲染器

// 二. 注册必须的组件   将所有导入的组件注册一下
echarts.use(
  [TitleComponent, TooltipComponent, GridComponent, BarChart, CanvasRenderer]
);
// 三. 基本使用
let myChart;

const EchartsDemo = () => {

  const initialProducts = [
    {
      id: '1h7g',
      type: '衬衫',
      numbers: 5
    },
    {
      id: '1ha7g',
      type: '羊毛衫',
      numbers: 20
    },
    {
      id: '1h17g',
      type: '雪纺衫',
      numbers: 36
    },
    {
      id: '1h57g',
      type: '裤子',
      numbers: 10
    },
    {
      id: '70iu6ty',
      type: '高跟鞋',
      numbers: 10
    },
    {
      id: '6t79',
      type: '袜子',
      numbers: 20
    }
  ]

  const [echartsHeight, setEchartsHeight] = useState(400)
  const [products, setProducts] = useState(initialProducts)

  useEffect(() => {
    // 初始化一个图表
    if (!myChart) {
      myChart = echarts.init(document.getElementById('main'));
      myChart.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: products.map(product => product.type)
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: products.map(product => product.numbers)
        }]
      });
    } else {
      // 当 products 更新完毕之后才能更新图表
      // 需要使用 echarts 的 setOption 方法更新图表
      myChart.setOption({
        xAxis: {
          data: products.map(product => product.type)
        },
        series: [{
          data: products.map(product => product.numbers)
        }]
      })
    }
    // 给 useEffect 加上第二个参数，主要是为了控制 useEffect 的执行，写在第二个参数数组内的数据发生改变的时候 useEffect 钩子触发,当数组为空的时候 useffect 函数只会在组件出现的执行一次
    // 只要是在 useEffect 中使用的变量或者 state，其他可变的值，都需要设置在第二个参数的数组内，不填的话会警告
  }, [products])
  const btnFun = () => {
    setEchartsHeight(500)
    myChart.resize({
      height: 500
    })
  }
  const addProduct = () => {
    setProducts([...products, { id: '8u9i0o9i', type: '外套', numbers: 25 }])
    // 需要在更新完 products 之后执行 setOption 重新渲染图表，需要到生命周期去做，因为 setProducts 更新是异步的
  }
  return (
    <div className='echarts-demo'>
      <h3>学习使用 echarts5 </h3>
      <button onClick={btnFun}>修改echarts的高度</button>
      <button onClick={addProduct}>新增一个商品数据</button>
      <div style={{ width: 500, height: echartsHeight }} id="main"></div>
      123
    </div>
  );
}

export default EchartsDemo;
// class EchartsDemo extends Component {
//   render() {
//     return (
//       <div className='echarts-demo'>
//         <h3>学习使用 echarts5 </h3>
//         <div id="main"></div>
//       </div>
//     );
//   }
//   componentDidMount() {
//     console.log(document.getElementById('main'))
//   }
// }

// export default EchartsDemo;