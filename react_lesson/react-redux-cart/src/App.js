import CartContainer from "./containers/CartContainer";
import ProductsContainer from "./containers/ProductsContainer";

function App() {
  return (
    <div className="App">
      <h2>Shopping Cart Example</h2>
      <hr/>
      <ProductsContainer />
      <hr/>
      <CartContainer />
    </div>
  );
}

export default App;
