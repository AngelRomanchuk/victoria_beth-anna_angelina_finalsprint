import React, { useState, useEffect } from 'react';
import Header from "./Header";
import RandomProduct from './RandomProduct';
import Footer from './Footer';
import DeleteButton from './DeleteButton';
import Checkout from './Checkout';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCheckout, setShowCheckout] = useState(false);

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

  const handleCheckout = () => {
    setShowCheckout(true);
  };

  const handleOrderPlaced = async () => {
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

      // Clear the cart items from state
      setCartItems([]);

      // Close the checkout view
      setShowCheckout(false);

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
  if (cartItems.length === 0) return (
    <div>
      <Header />
      <h1 className='h1ProductDetails'>Your cart is empty.</h1>
      <RandomProduct mainText='You might like this' />
      <Footer />
    </div>
  );

  return (
    <div>
      <Header />
      <h1 className='h1ProductDetails'>Your Shopping Bag</h1>
      <h4 className='totalPrice'>Total Price: ${calculateTotalPrice()}</h4>
      <div className='shopProductBlock'>
        {cartItems.map((item) => (
          <div key={item.id} className='shopProduct'>
            <img className='shopImg' src={`http://localhost:5000${item.Image}`} alt={item.name} />
            <div className='details'>
              <h2>{item.name}</h2>
              <p>#{item.serialNumber}</p>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              <button className='search-button'>Add To Wish List</button>
              <DeleteButton
                id={item.id}
                onDelete={handleDelete}
              />
            </div>
          </div>
        ))}
      </div>
      <button className='nav-links centerLink' onClick={handleCheckout}>Checkout</button>
      {showCheckout && <Checkout onOrderPlaced={handleOrderPlaced} />}
      <RandomProduct mainText='You might like this' />
      <Footer />
    </div>
  );
};

export default ShoppingCart;
