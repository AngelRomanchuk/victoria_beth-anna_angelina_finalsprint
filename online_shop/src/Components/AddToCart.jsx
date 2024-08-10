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
    
      // Show success message
      window.alert('Product added to cart successfully!');
      } catch (error) {
        // Show error message
        window.alert(`Error adding product to cart: ${error.message}`);
      }
  };

  return (
    <button className='search-button' onClick={handleAddToCart}>
      Add To Cart
    </button>
  );
};

export default AddToCartButton;
