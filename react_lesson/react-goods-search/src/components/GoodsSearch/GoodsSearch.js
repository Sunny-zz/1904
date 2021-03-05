import { Component } from 'react';
import GoodsContent from '../GoodsContent/GoodsContent';
import SearchForm from '../SearchForm/SearchForm';
import './goods-search.css'
import axios from 'axios'

class GoodsSearch extends Component {
  state = {
    goodsArr: [],
    searchText: '',
    // 上面这两个状态不要输入的时候就修改，点击搜索按钮的时候修改
    isSelectedStocked: false 
  }
  async componentDidMount() {
    const res = await axios.get('http://localhost:3008/products')
    // console.log(res.data)
    this.setState({
      goodsArr: res.data
    })
  }
  render() {
    const { goodsArr, searchText, isSelectedStocked} = this.state
    // console.log(searchText, isSelectedStocked)
    // showGoodsArr 是以后我们要筛选之后的商品数组
    const showGoodsArr = goodsArr.filter(goods => goods.name.includes(searchText) && ( isSelectedStocked ? goods.stocked === true : true))
    // const showGoodsArr = goodsArr.filter(goods => {
    //   const demo1 = goods.name.includes(searchText)
    //   const demo2 = isSelectedStocked ? goods.stocked === true : true
    //   return demo1 && demo2 
    // })
    return (
      <div className='goods-seach'>
        <SearchForm searchText={searchText} isSelectedStocked={isSelectedStocked} onChange={this.change}  />
        <br />
        {/* GoodsContent 只是用来展示筛选结果的组件 */}
        {/* 一般推荐使用 && 实现条件渲染，渲染的时候是只渲染一种情况。 */}
        {/* 如果是成立渲染一种，不成立渲染一种，那就不能使用 &&  */}
        {showGoodsArr.length !== 0 && <GoodsContent showGoodsArr={showGoodsArr} />}
      </div>
    );
  }
  change = e => {
    const target = e.target
    const stateName = target.name
    this.setState({
      [stateName]: target.type === 'checkbox' ? target.checked : target.value
    })
  }
}

export default GoodsSearch;