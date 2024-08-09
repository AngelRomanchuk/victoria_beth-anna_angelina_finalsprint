import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { getProducts } from "./API";
import Header from "./Header";
import Footer from "./Footer";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = () => {
      const products = getProducts();
      setProducts(products);
    };

    fetchProducts();
  }, []);

  const handleDetailsClick = (group) => {
    navigate(`/products/${group}`);
  };

  return (
    <div className="product-list">
      <Header />
      <h1>Product List</h1>
      <div className="products">
        {products.map((product) => (
          <div key={product.serialNumber} className="product">
            <img src={product.Image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.serialNumber}</p>
            <button className='search-button' onClick={() => handleDetailsClick(product.group)}>
              View More Details
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ProductList;
