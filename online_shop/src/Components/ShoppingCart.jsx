// src/ShoppingCart.js
import React, { useState, useEffect } from 'react';
import Header from "./Header";
import RandomProduct from './RandomProduct';
import Footer from './Footer';
import DeleteButton from './DeleteButton';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
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

  const handleDelete = (serialNumber) => {
    setCartItems(prevItems => prevItems.filter(item => item.serialNumber !== serialNumber));
  };

  if (loading) return <div>Loading...</div>;
  if (cartItems.length === 0) return <div><Header /><h1 className='h1ProductDetails'>Your cart is empty.</h1><RandomProduct mainText='You might like this'/>
        <Footer /></div>;

  return (
    <div>
        <Header />
      <h1 className='h1ProductDetails'>Your Shopping Bag</h1>
      <h4 className='totalPrice'>Total Price: ${calculateTotalPrice()}</h4>
        <div className='shopProductBlock'>
            {cartItems.map((item) => (
            <div key={item.serialNumber} className='shopProduct'>
                <img className='shopImg' src={item.imgsrc} alt={item.name} />
                <div className='details'>
                    <h2>{item.name}</h2>
                    <p>#{item.serialNumber}</p>
                    <p>{item.description}</p>
                    <p>Price: ${item.price}</p>
                    <button className='search-button'>Add To Wish List</button>
                    <DeleteButton 
                      serialNumber={item.id} 
                      onDelete={handleDelete} 
                    />
                </div>
            </div>
            ))}
        </div>
        <RandomProduct mainText='You might like this'/>
        <Footer />
    </div>
  );
};

export default ShoppingCart;
