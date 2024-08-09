// src/components/AddToCart.js
import React from 'react';

const AddToCart = ({ product }) => {
  const handleAddToCart = async () => {
      // Fetch the product data from db.json
      const serialNumberStr = String(product.serialNumber);
      const response = await fetch(`http://localhost:5000/products?serialNumber=${serialNumberStr}`);
      const productData = await response.json();

      // Add the product to the cart
      const cartResponse = await fetch('http://localhost:5000/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      if (!cartResponse.ok) {
        throw new Error('Failed to add to cart');
      }

      // Optionally, you can provide feedback to the user
      alert('Product added to cart!');
    };

  return (
    <button onClick={handleAddToCart} className='search-button'>
      Add to Cart
    </button>
  );
};

export default AddToCart;
