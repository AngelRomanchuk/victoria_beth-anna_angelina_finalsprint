import ProductList from "./Components/ProductList";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";

function App() {
  return (
    <Router>
      <div>
        <div className="App">
          <Header />
          <Link to="/">Home </Link>
          <ProductList />
        </div>
      </div>
    </Router>
  );
}

export default App;
