
import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer radley-regular-italic">
         <div className="footer-socials">
          <div className='social'>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social">Facebook</a>
            <FaFacebook />
          </div>
          <div className='social'>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social">Instagram</a>
            <FaInstagram />
          </div>
          <div className='social'>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social">Twitter</a>
            <FaSquareXTwitter />
          </div>
        </div>
      <p>&copy; 2024 Beauty Bliss. All rights reserved.</p>
      <div className="footer-links radley-regular-italic">
        <a href="#faq">FAQ</a>
        <a href="#privacy policy">Privacy Policy</a>
        <a href="#contact">Contact</a>
      </div>
      <img 
        src={`${process.env.PUBLIC_URL}/Images/Beauty_Bliss.png`}
        className="footerlogo"
      />
    </footer>
  );
};

export default Footer;
