// src/AddToCartButton.js
import React from 'react';

const AddToCartButton = ({ product }) => {
  const handleAddToCart = async () => {
    try {
      const response = await fetch('http://localhost:5000/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok. Status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Product added to cart:', result); // Debugging log

      // Optionally handle the result (e.g., show a notification)
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  return (
    <button className='search-button' onClick={handleAddToCart}>
      Add To Cart
    </button>
  );
};

export default AddToCartButton;
