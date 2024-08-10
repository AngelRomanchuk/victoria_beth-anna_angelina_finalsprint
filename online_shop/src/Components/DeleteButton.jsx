// src/DeleteButton.js
import React from 'react';

const DeleteButton = ({ id, onDelete }) => {
  const handleDelete = async () => {
    try {
      const url = `http://localhost:5000/cart/${id}`;
      const response = await fetch(url, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok. Status: ${response.status}`);
      }

      onDelete(id);

      // Show a success message
      window.alert('Product successfully deleted from cart!');
    } catch (error) {
      console.error('Error deleting the product:', error);
      window.alert('Failed to delete the item. Please try again.');
    }
  };

  return (
    <button className='search-button' onClick={handleDelete}>
      Delete
    </button>
  );
};

export default DeleteButton;
