import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import ProductDetails from './Components/ProductDetails';
import ProductList from "./Components/ProductList";
import Header from './Components/Header';

function App() {
  return (
    <Router>
      <div>
    
        <div className="App">
          <Header />
          <Link to="/">Home </Link>
          <ProductList />
        </div>
    
        <Link to="/">Home </Link> |
        <Link to="/products"> Show Lipgloss Products </Link> |

        <div>
          <h1>Hello</h1>
        </div>
        
        <Routes>
          <Route path="/products" element={<ProductDetails />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
