// import CartContainer from "./containers/CartContainer";
// import ProductsContainer from "./containers/ProductsContainer";
// import axios from 'axios'
// import { useEffect } from "react";
// import { connect } from "react-redux";
// import { getProducts } from './actions'
import CountContainer from "./components/Count";
function App({ getProducts }) {
  // useEffect(() => {
  //   // 发请求获取数据，更新 store 
  //   // (async () => {
  //   //   const res = await axios.get('http://localhost:3008/products')
  //   //   getProducts(res.data)
  //   // })()
  //   getProducts()
  // }, [getProducts])
  return (
    <div className="App">
      <h2>Shopping Cart Example</h2>
      <hr />
      {/* <ProductsContainer /> */}
      <hr />
      {/* <CartContainer /> */}
      <hr/>
      <CountContainer />
    </div>
  );
}

// export default connect(null, { getProducts })(App);
export default App;
