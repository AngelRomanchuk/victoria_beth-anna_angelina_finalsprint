import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Banner from "./Components/Banner";
import Header from "./Components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Banner
        imageUrl={`${process.env.PUBLIC_URL}/assets/Images/brand-pics/Coming.png`}
      />
      {/* Define routes if you have other components/pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
