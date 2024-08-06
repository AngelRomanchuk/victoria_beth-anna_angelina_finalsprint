// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation if you're using React Router
import "./App.css"; // Import CSS for styling

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>My E-Commerce Site</h1>
      </div>
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
