// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation if you're using React Router
import "./App.css"; // Import CSS for styling

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>Beauty Bliss</h1>
      </div>
      <nav className="nav">
        <ul className="nav-links">
          <Link to="/">Home</Link>

          <Link to="/products">Products</Link>

          <Link to="/about">About</Link>

          <Link to="/contact">Contact</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
