// src/Checkout.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ onOrderPlaced }) => {
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
    return cartItems.length;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handlePlaceOrder = async () => {
    setLoading(true);
  
    try {
      // Fetch all cart items
      const response = await fetch('http://localhost:5000/cart');
      if (!response.ok) {
        throw new Error('Failed to fetch cart items.');
      }
      const cartItems = await response.json();
  
      // Extract IDs from fetched cart items
      const ids = cartItems.map(item => item.id);
  
      // Delete all items by their IDs
      await Promise.all(ids.map(id => 
        fetch(`http://localhost:5000/cart/${id}`, {
          method: 'DELETE',
        })
      ));
  
      // Notify parent component that order was placed
      if (onOrderPlaced) onOrderPlaced();
  
      // Show a confirmation message
      window.alert('Order placed successfully! Your cart has been cleared.');
  
    } catch (error) {
      console.error('Error placing the order:', error);
      window.alert('Error placing the order. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  

  if (loading) return <div>Loading...</div>;

  return (
    <div className="checkout-container">
      <form className="checkout-form">
        <div className='group1'>
          <div className="form-group">
            <label className='name'>Name:</label>
            <input className="enter" type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label className='name'>Phone Number:</label>
            <input className="enter" type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label className='name'>Email:</label>
            <input className="enter" type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
        </div>
        <div className='group2'>
          <div className="form-group">
            <label className='name'>Address:</label>
            <input className="enter" type="text" name="address" value={formData.address} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label className='name'>City:</label>
            <input className="enter" type="text" name="city" value={formData.city} onChange={handleChange} required />
          </div>
        </div>
        <div className='group3'>
          <div className="form-group">
            <label className='name'>Province:</label>
            <input className="enter" type="text" name="province" value={formData.province} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label className='name'>ZIP Code:</label>
            <input className="enter" type="text" name="zip" value={formData.zip} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-group">
          <label className='checkbox'>
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
        <div className='total'>
          <h3>Total Products: {calculateTotalProducts()}</h3>
          <h3>Total Price: ${calculateTotalPrice()}</h3>
        </div>
        {formData.isGift && <p className='gift'>The order is a present - wrapping it for you nicely</p>}
        <button className="search-button checkoutBtn" onClick={handlePlaceOrder} disabled={loading}>
          {loading ? 'Processing...' : 'Place Order'}
        </button>
      </div>
    </div>
  );
};

export default Checkout;
