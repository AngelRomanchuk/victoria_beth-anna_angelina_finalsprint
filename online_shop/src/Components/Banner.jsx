import React from "react";

const Banner = ({ title, subtitle, imageUrl }) => {
  return (
    <div className="banner">
      <img src={imageUrl} alt="Banner" className="banner-image" />
      <div className="banner-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Banner;
