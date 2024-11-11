import React from "react";
function HeaderSection(){
    return(
        <header>
            <nav>
        <a href="#" className="logo">
        <box-icon name='game' type='solid' color='#00FFFF' ></box-icon> Gaming<span>Sphere</span>
        </a>
        <ul className="navigation">
          <li><a href="#home">Home</a></li>
          <li><a href="#cart">Cart</a></li>
          <li><a href="#store">Store</a></li>
          <li><a href="#login">Sign up/Sign in</a></li>
          <li className="dropdown">
            <a href="#more">More</a>
            <ul className="dropdown-menu">
              <li><a href="#about">About us</a></li>
              <li><a href="#contact">Contact us</a></li>
              <li><a href="#library">Library</a></li>
              <li><a href="#tournament">Tournament</a></li>
            </ul>
          </li>
        </ul>
      </nav>
        </header>
    )
}
export default HeaderSection