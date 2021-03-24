import Product from "./Product"

const ProductItem = ({product, addToCart}) => {
  // product --->    {id:xx,title:xx,price: xx, inventory: xx}
  // console.log(product)
  return ( 
    <div>
      <Product {...product} />
      <button onClick={() => addToCart(product.id)} disabled={product.inventory === 0} >{product.inventory === 0 ? 'slod out' : 'add to cart'}</button>
    </div>
   );
}
 
export default ProductItem;