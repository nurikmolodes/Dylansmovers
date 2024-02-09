/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef, useState } from "react";
import "./Navbar.scss"; // You can create this CSS file for styling
import movers from "../../assets/logo.png";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import youtube from "../../assets/youtube.svg";
import gmail from "../../assets/gmail.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();

  const getFreeQuote = () => {
    navigate("/");
    window.scrollTo(0, 0);
    setTimeout(() => {
      const input = document.getElementById("focus");
      input.focus();
    }, 0);
  };

  const menuRef = useRef(null);
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const location = useLocation();

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
          <Link to="/">
            <img src={movers} />
            <span>Dylan's movers + cleaning</span>
          </Link>
        </div>
        <div className={`navbar-links`}>
          <ul>
            <li>
              <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className={location.pathname === "/services" ? "active" : ""}>
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/movingtips"
                className={location.pathname === "/movingtips" ? "active" : ""}>
                Moving Tips
              </Link>
            </li>
            <li>
              <Link to="/areas" className={location.pathname === "/areas" ? "active" : ""}>
                Service Areas
              </Link>
            </li>
            <li>
              <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="hamburger-menu" ref={menuRef}>
          <button className={`hamburger-button ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </button>
          {isOpen && (
            <div className="menu">
              <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                Home
              </Link>
              <Link to="/services" className={location.pathname === "/services" ? "active" : ""}>
                Services
              </Link>
              <Link
                to="/movingtips"
                className={location.pathname === "/movingtips" ? "active" : ""}>
                Moving Tips
              </Link>
              <Link to="/areas" className={location.pathname === "/areas" ? "active" : ""}>
                Service Areas
              </Link>
              <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
                About
              </Link>
            </div>
          )}
        </div>
        <button onClick={getFreeQuote} className="free-quote">
          Get a free quote
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
