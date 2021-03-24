import { connect } from 'react-redux';
import Cart from '../components/Cart';
import { getProductsInCart, getTotal } from '../reducers'
import { checkout } from '../actions'
const CartContainer = (props) => {
  // console.log(props)
  return (
    <Cart {...props} />
  );
}
const mapStateToProps = state => {
  // 我们想要的就是购物车的商品列表数据
  // 但是 store 内的 cart 并不包含所有需要的数据，需要 products 数据 和 cart 数据做一个计算
  const cartList = getProductsInCart(state.products, state.cart)
  return {
    cartList,
    total: getTotal(cartList).toFixed(2)
  }
}
export default connect(mapStateToProps, { checkout })(CartContainer);