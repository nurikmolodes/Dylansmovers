/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
import "./Footer.scss";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  return (
    <div className={`footer ${location !== "/admin-dashboard" && "marginBottom"}`}>
      <div className="contact">
        <p className="title">Contact Us</p>
        <ul>
          <li>
            {/* <img
              src="https://assets-global.website-files.com/62c6a1644fedf732c282fe5c/64825e6d0513ccd28c746c7f_phone-fill.svg"
              loading="lazy"
              alt=""
            /> */}
            <a href="tel:5715949586">(571) 594 9586</a>
          </li>
          <li>
            {/* <img
              src="https://assets-global.website-files.com/62c6a1644fedf732c282fe5c/6487b93a2569738adcf52cf5_at-fill.svg"
              loading="lazy"
              alt=""
            /> */}
            <a href="mailto:dylansmovers@gmail.com">dylansmovers@gmail.com</a>
          </li>
          <li>
            {/* {" "}
            <img
              src="https://assets-global.website-files.com/62c6a1644fedf732c282fe5c/64825e572d521c9163ac7fd9_building-fill.svg"
              loading="lazy"
              alt=""
            /> */}
            <a
              href="https://www.google.com/maps?ll=38.867822,-77.27008&z=17&t=m&hl=en&gl=US&mapclient=embed&cid=15436103000119213251"
              target="_blank">
              9411 Lee Hwy #103, Fairfax, VA 22031
            </a>
          </li>
        </ul>
        <div className="map_block">
          <div className="resizable">
            <iframe
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Dylan's%20Movers+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              width="100%"
              height="100%"
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className="very-bottom">
          <p>©2023 Dylan's Moving Services Northern Virginia, All Rights Reserved.</p>
          <div className="two-links">
            <a href="" target="_blank">
              Terms & Conditions
            </a>
            <a href="" target="_blank">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
      <div className="about">
        <p className="title">About</p>
        <ul>
          <li>
            <Link to="/about">Why Us</Link>
          </li>
          <li>
            <Link to="/about">FAQ</Link>
          </li>
          <li>
            <Link to="/movingtips">Moving Tips</Link>
          </li>
          <li>
            <Link to="services">Services</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
