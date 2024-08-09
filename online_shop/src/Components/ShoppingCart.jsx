// src/ShoppingCart.js
import React, { useState, useEffect } from 'react';
import Header from "./Header";
import RandomProduct from './RandomProduct';
import Footer from './Footer';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCartItems = async () => {
        const response = await fetch('http://localhost:5000/cart');
        const data = await response.json();
        const transformedData = data.flatMap(item => item[0]);
        setCartItems(transformedData);
        setLoading(false);
    };

    fetchCartItems();
  }, []);

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  if (loading) return <div>Loading...</div>;
  if (cartItems.length === 0) return <div>Your cart is empty.</div>;

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
                    <button className='search-button'>Delete</button>
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
