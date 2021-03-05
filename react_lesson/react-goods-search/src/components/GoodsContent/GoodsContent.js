import GoodsList from "../GoodsList/GoodsList"
import './goods-content.css'
// 函数组件如何接收 props ，
// 函数组件的第一个参数就是父组件传递的 props 对象
const GoodsContent = ({ showGoodsArr }) => {
  // console.log(showGoodsArr)
  const goodsCategorys = showGoodsArr.reduce((res, goods) => {
    const { category } = goods
    // if (!res.includes(category)) {
    //   res.push(category)
    // }
    // return res
    return res.includes(category) ? res : [...res, category]
  }, [])

  // 根据类别筛选数组的方法
  const getGoodsListByCategory = category => {
    return showGoodsArr.filter(goods => goods.category === category)
  }

  // GoodsList 组件是展示不同类别的数据的，需要接收该类别的所有数据
  const content = goodsCategorys.map(type => <GoodsList list={getGoodsListByCategory(type)} category={type} key={type} />)
  return (
    <div className="goods-content">
      <div className="table-header">
        <h3>Name</h3>
        <h3 className='right'>Price</h3>
      </div>
      {/* 要展示一个或者多个列表 */}
      {content}
    </div>
  );
}

export default GoodsContent;