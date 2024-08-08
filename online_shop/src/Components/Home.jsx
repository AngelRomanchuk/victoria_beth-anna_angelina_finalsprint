import React from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import Banner from "./Banner";
import RandomProduct from "./RandomProduct";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner imageUrl={`${process.env.PUBLIC_URL}/assets/Images/brand-pics/Coming.png`}/>
      <ProductList />
      <RandomProduct />
    </div>
  );
};

export default Home;
