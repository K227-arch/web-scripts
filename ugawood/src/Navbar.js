import React from "react";
import './Navbar.css';

function Navbar() {
  return (
    <div className="nav-main">

        {/* HEADER */}

      <div className="header">
        <div className="header-logo">
          <img src="./phone.png" width={16} height={16} alt="phone" />
          <p>+256 726 273 948</p>
        </div>
        <div className="header-logo">
          <img src="./mail.png" width={16} height={16} alt="mail" />
          <p>info@ugawood.co.ug</p>
        </div>
      </div>

      {/* NAVBAR */}
      
      <div className="nav-container">
        <div className="nav-logo">
          <img src="./Logo.png" width={80} height={40} alt="Logo" />
        </div>
        <div className="nav-links">
          <a href="#Home">HOME</a>
          <a href="#Home">PORTFOLIO</a>
          <a href="#Home">OUR STORY</a>
          <a href="#Home">CONTACT US</a>
          <img src='/menu-01.svg' alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
