import React from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import Banner from "./Banner";
import Footer from "./Footer";
import RandomProduct from "./RandomProduct";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner imageUrl={`${process.env.PUBLIC_URL}/assets/Images/brand-pics/Coming.png`}/>
      <ProductList />
      <RandomProduct mainText="Our Trends"/>
      <Footer />
    </div>
  );
};

export default Home;
