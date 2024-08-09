
import React from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { PiShoppingCart } from "react-icons/pi";
import { VscSearch } from "react-icons/vsc";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <img
          src={`${process.env.PUBLIC_URL}/assets/Images/brand-pics/Beauty_Blisspng.png`}
          alt="Beauty Bliss Logo"
          className="logo"
        />
        <nav className="nav">
          <ul className="nav-links radley-regular-italic">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Shop</Link>
            </li>
            <li>
              <Link to="/about">About </Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <div className="icons">
          <VscSearch />
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Type Here..." />
          <button type="button" className="search-button">
            Search
          </button>
        </div>
        <div className="icons">
          <CgProfile className="icon" />
          <Link to="/shoppingcart">
            <PiShoppingCart className="icon" />
          </Link>
        </div>
      </div>
    </header>
  );
};
 

export default Header;
