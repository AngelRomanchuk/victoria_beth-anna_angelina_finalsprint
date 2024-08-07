// import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails";
import Header from "./Components/Header";
import Home from "./Components/Home";
import "./index.css";

function App() {
  return (
    <Router>
      <div>
        {/* <Link to="/">Home </Link> |
        <Link to="/products"> Show Lipgloss Products </Link> | */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
