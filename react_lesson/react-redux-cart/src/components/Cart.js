import Product from "./Product";

const Cart = ({ cartList, total, checkout }) => {
  const cartListContent = cartList.length ? <div>
    {cartList.map(product => <Product key={product.id} {...product} />)}
  </div> : <div>Please add some products to cart.</div>
  return (
    <div>
      <h3>Your Cart</h3>
      {cartListContent}
      <p>Total: ${total}</p>
      <button disabled={!cartList.length} onClick={checkout}>checkout</button>
    </div>
  );
}

export default Cart;