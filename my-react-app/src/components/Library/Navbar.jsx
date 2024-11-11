import React from 'react';
import './Library.css'

function Navbar() {
  return (
    <nav>
      <a href="#" className="logo">
        <i className="fas fa-gamepad"></i> Gaming<span>UI</span>
      </a>
      <div className="menuToggle"></div>
      <ul className="navigation">
        <li><a href="home.html">Home</a></li>
        <li><a href="cart.html">Cart</a></li>
        <li><a href="store.html">Store</a></li>
        <li><a href="login.html">Sign up/Sign in</a></li>
        <li className="dropdown">
          <a href="#more">More</a>
          <ul className="dropdown-menu">
            <li><a href="about us/about us page.html">About us</a></li>
            <li><a href="contact us/contact2.html">Contact us</a></li>
            <li><a href="library.html">Library</a></li>
            <li><a href="Tournament/index.html">Tournament</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
