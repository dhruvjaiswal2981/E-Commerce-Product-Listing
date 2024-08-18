import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#shop">Shop</a></li>
          <li className="dropdown">
            <a href="#categories">Categories</a>
            <div className="dropdown-menu">
              <a href="#category1">Category 1</a>
              <a href="#category2">Category 2</a>
              <a href="#category3">Category 3</a>
            </div>
          </li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#stories">Stories</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search products..." />
        <button>Search</button>
      </div>
    </header>
  );
};

export default Header;
