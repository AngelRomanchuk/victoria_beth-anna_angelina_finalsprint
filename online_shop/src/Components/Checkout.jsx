// src/Checkout.js
import React, { useState, useEffect } from 'react';

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    address: '',
    city: '',
    province: '',
    zip: '',
    isGift: false,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch('http://localhost:5000/cart');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Directly set the data since it's already an array of objects
        setCartItems(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cart items:', error);
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const calculateTotalProducts = () => {
    return cartItems.length; // Number of items in the cart
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="checkout-container">
      <form className="checkout-form">
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>City:</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Province:</label>
          <input type="text" name="province" value={formData.province} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>ZIP Code:</label>
          <input type="text" name="zip" value={formData.zip} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="isGift"
              checked={formData.isGift}
              onChange={handleChange}
            />
            Is this a gift?
          </label>
        </div>
      </form>

      <div className="order-summary">
        <h1 className='h1ProductDetails'>Order Summary</h1>
        <h3>Total Products: {calculateTotalProducts()}</h3>
        <h3>Total Price: ${calculateTotalPrice()}</h3>
        {formData.isGift && <p>The order is a present - wrapping it for you nicely</p>}
      </div>

      <button className="checkout-button">Place Order</button>
    </div>
  );
};

export default Checkout;
