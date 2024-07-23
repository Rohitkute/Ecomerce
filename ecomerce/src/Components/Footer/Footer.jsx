import React from 'react';
import './Footer.css';
import logo from '../../images/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Company Logo" />
        <h2>Company Name</h2>
      </div>
      <div className="footer-info">
        <p>Address: 1234 Street Name, City, State, 12345</p>
        <p>Contact Number: (123) 456-7890</p>
        <p>Email: info@company.com</p>
      </div>
      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
