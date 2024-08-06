import React, { useEffect, useState } from "react";
import { getProducts } from "./API";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = () => {
      const products = getProducts();
      setProducts(products);
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      <h1>Product List</h1>
      <div className="products">
        {products.map((product) => (
          <div key={product.serialNumber} className="product">
            <img src={product.Image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.serialNumber}</p>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
