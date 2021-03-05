import Goods from "../Goods/Goods";
import GoodsListTitle from "../GoodsListTitle/GoodsListTitle";
import './goods-list.css'
const GoodsList = ({ category, list }) => {
  const listContent = list.map(goods => <Goods key={goods.id} {...goods} />)
  return (
    <div className="goods-list">
      <GoodsListTitle>{category}</GoodsListTitle>
      <ul className='list'>
        {listContent}
      </ul>
    </div>
  );
}

export default GoodsList;