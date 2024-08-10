import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";
import RandomProduct from "./RandomProduct";
import { Link } from "react-router-dom";

const Home = () => {
  const subCategories = [
    {
      title: "LipSticks",
      imageUrl: `${process.env.PUBLIC_URL}/Images/rosette.jpg`,
    },
    {
      title: "LipGloss",
      imageUrl: `${process.env.PUBLIC_URL}/Images/naturalGlow.jpg`,
    },
    {
      title: "Blush",
      imageUrl: `${process.env.PUBLIC_URL}/Images/topicalSunriseblush.jpg`,
    },
    {
      title: "Nails",
      imageUrl: `${process.env.PUBLIC_URL}/Images/summerFizz.jpg`,
    },
    {
      title: "Mascara",
      imageUrl: `${process.env.PUBLIC_URL}/Images/fierceFlutter.jpg`,
    },

    {
      title: "Eyeshadows",
      imageUrl: `${process.env.PUBLIC_URL}/Images//pinkDriftwood.jpg`,
    },
    {
      title: "Foundation",
      imageUrl: `${process.env.PUBLIC_URL}/Images/ivory.jpg`,
    },
  ];

  return (
    <div>
      <Header />

      <Banner
        imageUrl={`${process.env.PUBLIC_URL}/Images/Coming.png`}
      />
      <div className="subCategories">
        {subCategories.map((category, index) => (
          <Link
            to="productlist"
            key={index}
            className="subCategory"
          >
            <img
              src={category.imageUrl}
              alt={category.title}
              className="subCategoryImage"
            />
            <h3>{category.title}</h3>
          </Link>
        ))}
      </div>
      <RandomProduct mainText="Our Trends" />

      <Footer />
    </div>
  );
};

export default Home;
