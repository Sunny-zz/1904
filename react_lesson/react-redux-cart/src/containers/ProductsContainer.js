// 这是商品展示功能组件的容器组件，负责获取商品列表以及对应的一些修改

import { connect } from 'react-redux'
import ProductsList from '../components/ProductsList';
import { addToCart } from '../actions'
const ProductsContainer = (props) => {
  return (
    <ProductsList {...props} />
  )
}

const mapStateToProps = state => ({
  products: state.products
})

// const mapDispatchToProps = dispatch => ({
//   addToCart: id => dispatch({type: ADD_TO_CART,id})
// }

// const mapDispatchToProps = dispatch => ({
//   addToCart: id => dispatch(addToCart(id))
// })
// 上述方式的简写
const mapDispatchToProps = { addToCart }
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);