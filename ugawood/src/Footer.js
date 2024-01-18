import React from "react";
import "./Footer.css"

function Footer() {
  return (
    <div className="fcontainer">
      <div className="ftop">
        <div className="flogo">
          <img src="./Logo.png" width={138} height={77} alt="Logo" />
        </div>
        <div className="flinks">
          <a href="#Home">HOME</a>
          <a href="#Home">PORTFOLIO</a>
          <a href="#Home">OUR STORY</a>
          <a href="#Home">CONTACT US</a>
        </div>
      </div>

      <div className="fbottom">
        <div>
            <p>© 2023 Ugawood Limited. All rights reserved.</p>
        </div>
        <div>
        <a href="#Home">Privacy Policy</a>
        <a href="#Home">Terms of Service</a>
        <a href="#Home">Cookies Settings</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
