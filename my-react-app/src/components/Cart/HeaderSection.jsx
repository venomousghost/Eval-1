import React from "react";
function HeaderSection(){
    return(
        <header>
            <nav>
        <a href="#" class="logo">
            <box-icon name='game' type='solid' color='#00FFFF' ></box-icon>Gaming<span>UI</span>
        </a>
        <div class="menuToggle" onclick="toggleMenu()">
        </div>
        <ul class="navigation">
            <li><a href="home.html" onclick="toggleMenu()">Home</a></li>
            <li><a href="/Cart" onclick="toggleMenu()">Cart</a></li>
            <li><a href="/Profile" onclick="toggleMenu()">Profile</a></li>
            <li><a href="/Login" onclick="toggleMenu()">Sign up/sign in</a></li>
            <li class="dropdown">
                <a href="#more" onclick="toggleMenu()">More</a>
                <ul class="dropdown-menu">
                    <li><a href="#option1" onclick="toggleMenu()">About us</a></li>
                    <li><a href="/Contact" onclick="toggleMenu()">Contact us</a></li>
                     <li><a href="/Library" onclick="toggleMenu()">Library</a></li>
                </ul>
            </li>

        </ul>
      </nav>
        </header>
    )
}
export default HeaderSection
