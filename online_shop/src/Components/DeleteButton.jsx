// src/DeleteButton.js
import React from 'react';

const DeleteButton = ({ serialNumber, onDelete }) => {
  const handleDelete = async () => {
    try {
      const url = `http://localhost:5000/cart/${serialNumber}`;
      const response = await fetch(url, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok. Status: ${response.status}`);
      }

      // Notify the parent component to update its state
      onDelete(serialNumber);
    } catch (error) {
      console.error('Error deleting the product:', error);
    }
  };

  return (
    <button className='search-button' onClick={handleDelete}>
      Delete
    </button>
  );
};

export default DeleteButton;
