
import Header from './Components/Header';
import Footer from './index.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Components/Home";
import Banner from "./Components/Banner";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Footer />

      </div>
      {/* Define routes if you have other components/pages */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
