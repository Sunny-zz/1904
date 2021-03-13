import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header/Header'
import Main from './components/Main/Main'



function App() {
  return (
    <Router>
      <div className="wrap">
        <Header />
        <Main />
      </div>
    </Router>
  );
}

export default App;
