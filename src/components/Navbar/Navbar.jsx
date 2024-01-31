import React, { useState } from "react";
import "./Navbar.scss"; // You can create this CSS file for styling
import movers from "../../assets/logo.png";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import youtube from "../../assets/youtube.svg";
import gmail from "../../assets/gmail.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section className="banner">
        <div className="socials">
          <a>
            <img src={facebook} />
          </a>
          <a>
            <img src={instagram} />
          </a>
          <a>
            <img src={youtube} />
          </a>
          <a>
            <img src={gmail} />
          </a>
        </div>
        <div className="call">
          <a href="tel:571-594-9586">(571) 594 9586</a>
          <span>MON-SUN 9am - 8pm</span>
        </div>
      </section>
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="/">
            <img src={movers} />
            <span>Dylan's movers + cleaning</span>
          </a>
        </div>
        <div className={`navbar-links`}>
          <ul>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Moving Tips</a>
            </li>
            <li>
              <a href="/">Service Areas</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
          </ul>
        </div>
        <div className="hamburger-menu">
          <button className={`hamburger-button ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </button>
          {isOpen && (
            <div className="menu">
              <a href="#">Services</a>
              <a href="#">Moving Tips</a>
              <a href="#">Service Areas</a>
              <a href="#">About</a>
            </div>
          )}
        </div>
        <button>Get a free quote</button>
      </nav>
    </>
  );
};

export default Navbar;
