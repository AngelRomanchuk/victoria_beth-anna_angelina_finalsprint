// import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import ProductDetails from './Components/ProductDetails';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './index.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Footer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductDetails />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
