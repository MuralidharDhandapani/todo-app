import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

function Header({ isDarkMode, toggleDarkMode }) {
  return (
    <header className="app-header">
      <div className="header-content">
        <div className="header-top">
          <h1>✓ Task Master</h1>
          <button 
            className="theme-toggle"
            onClick={toggleDarkMode}
            aria-label="Toggle theme"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
        <p className="subtitle">Organize your day, achieve your goals</p>
      </div>
    </header>
  );
}

Header.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired
};

export default Header;