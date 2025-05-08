import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="app-footer">
      <p>Follow us on:</p>
      <ul className="social-links">
        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
      </ul>
    </footer>
  );
}

export default Footer;