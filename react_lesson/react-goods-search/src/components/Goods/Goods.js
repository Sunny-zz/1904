import './goods.css'
const Goods = ({ name, price, stocked }) => {
  // console.log(props)
  return (
    <li className='goods'><span style={{ color: !stocked && 'red' }} >{name}</span><span className='right'>{price}</span></li>
  );
}

export default Goods;