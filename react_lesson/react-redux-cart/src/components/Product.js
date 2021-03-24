const Product = ({ title, price, inventory, quantity }) => {
  return (
    <div>
      <p>
        <span>{title} - ${price}</span>
        {
          // 看到底展示的是哪个数据  依据 quantity  有就是购物车
          quantity ? <span> x {quantity}</span> : inventory ? <span> x {inventory}</span> : null
        }
      </p>
    </div>
  );
}

export default Product;