
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ProductDetails from "./Components/ProductDetails";
import ShoppingCart from "./Components/ShoppingCart";
import ProductList from "./Components/ProductList";
import Checkout from "./Components/Checkout";

function App() {
  return (
    <Router>
      {/* Define routes if you have other components/pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/products/:group" element={<ProductDetails />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
      </Routes>
    </Router>
  );
}
 
export default App;
