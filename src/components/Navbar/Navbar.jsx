import React, { useState } from "react";
import "./Navbar.scss"; // You can create this CSS file for styling
import movers from "../../assets/logo.png";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import youtube from "../../assets/youtube.svg";
import gmail from "../../assets/gmail.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();

  const getFreeQuote = () => {
    navigate("/");
    window.scrollTo(0, 0);
    const input = document.getElementById("focus");
    input.focus();
  };

  return (
    <div className="wrapper-banner">
      <section className="banner">
        <div className="socials">
          <a href="https://www.facebook.com/dylans.movers/" target="_blank" rel="noreferrer">
            <img src={facebook} />
          </a>
          <a href="https://www.instagram.com/dylanmovers_us/" target="_blank" rel="noreferrer">
            <img src={instagram} />
          </a>
          <a
            href="https://www.youtube.com/@dylantady1116/featured"
            target="_blank"
            rel="noreferrer">
            <img src={youtube} />
          </a>
          <a href="mailto:dylansmovers@gmail.com" target="_blank" rel="noreferrer">
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
        <button onClick={getFreeQuote}>Get a free quote</button>
      </nav>
    </div>
  );
};

export default Navbar;
