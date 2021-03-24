
import ProductItem from './ProductItem';

const ProductsList = ({ products, addToCart }) => {
  const list = products.map(product => <ProductItem product={product} addToCart={addToCart} key={product.id} />)
  return (
    <div>
      <h3>Product</h3>
      {list}
    </div>
  );
}

export default ProductsList;