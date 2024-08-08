import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
 
import Header from "./Components/Header";
import Home from "./Components/Home";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
 
function App() {
  return (
    <Router>
      <Header />
      <Banner
        imageUrl={`${process.env.PUBLIC_URL}/assets/Images/brand-pics/Coming.png`}
      />
      <Footer />
      {/* Define routes if you have other components/pages */}
      <Routes></Routes>
    </Router>
  );
}
 
export default App;
