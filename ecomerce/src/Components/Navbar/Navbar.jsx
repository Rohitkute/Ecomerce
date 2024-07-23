import React from 'react';
import './Navbar.css'; // Create and import a CSS file for styling
import logo from '../../images/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <img src={logo} alt="Logo" /> {/* Replace with your logo */}
      </div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <div className="navbar-dropdown">
          <a href='/products'>Products</a>
          {/* <button className="dropbtn">Products</button> */}
          {/* <div className="dropdown-content">
            <a href="/products/category1">Category 1</a>
            <a href="/products/category2">Category 2</a>
            <a href="/products/category3">Category 3</a>
          </div> */}
        </div>
        <a href="/contact">Contact Us</a>
      </div>
      <div className="navbar-socialmedia">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">FB</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">TW</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">IG</a>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
        <button type="submit">Search</button>
      </div>
    </nav>
  );
};

export default Navbar;
