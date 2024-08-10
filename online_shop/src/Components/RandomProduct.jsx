// src/RandomProduct.js
import React, { useState, useEffect } from 'react';
import { getProducts } from './API';  // Adjust the import path as needed
import AddToCart from './AddToCart';

const RandomProduct = ({ mainText }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = () => {
      // Retrieve products from the API.js
      const allProducts = getProducts();

      // Shuffle array and get the first 4 products
      const shuffled = allProducts.sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 4);

      setProducts(selected);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className='h1ProductDetails'>{mainText}</h1>
      <div className='RandomProductsBox'>
        {products.map((product) => (
          <div className='RandomProducts' key={product.serialNumber}>
            <img 
              className='imgRandom'
              src={product.Image} 
              alt={product.name}  
            />
            <div className='details'>
              <h2>{product.name}</h2>
              <p>#{product.serialNumber}</p>
              <p>Price: ${product.price}</p>
              <button className='search-button'>Add To Wish List</button>
              <AddToCart product={product}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomProduct;
