import React from "react";
import "./Footer.css";
import * as SMIcon from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function Footer() {
  const aboutDetails =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum felis nisi, nec semper mi dictum at. Donec id lorem suscipit, egestas diam a, sagittis lorem. Curabitur non pharetra ipsum. Curabitur ut felis pellentesque, molestie dolor vitae, malesuada leo. Suspendisse fringilla arcu est, vel sagittis nunc pharetra in. Cras turpis ante, suscipit eu posuere nec, faucibus a justo. Pellentesque rutrum accumsan urna. Suspendisse potenti. Nullam rhoncus nulla ut mi imperdiet vestibulum. Integer dignissim ac felis in tempor. In convallis justo at eleifend sagittis. Sed arcu ex, condimentum porttitor lobortis in, molestie sit amet erat. Donec sit amet tortor id velit hendrerit ultricies nec id lectus. Pellentesque magna orci, fringilla eget ultricies auctor, fringilla non mi. In porttitor tortor vel felis vestibulum porta.";
  const currentYear = new Date().getFullYear();
  const socialMediaIconSize = 35;

  return (
    <div className="footer container-fluid">
      <div className="main-section d-flex flex-wrap">
        <div className="footer-section about-section col-md-6">
          <h3>About</h3>
          <p className="m-0">{aboutDetails}</p>
        </div>

        <div className="footer-section menu-section col-md col-sm-12 d-flex flex-column">
          <h3>Menu</h3>
          <Link className="a" to="/">
            {" "}
            Home{" "}
          </Link>
          <Link className="a" to="/profile">
            {" "}
            Profile{" "}
          </Link>
          <Link className="a" to="/dashboard">
            {" "}
            Dashboard{" "}
          </Link>
          <Link className="a" to="/recomandation">
            {" "}
            Recomandations{" "}
          </Link>
        </div>

        <div className="footer-section menu-section col-md col-sm-12 d-flex flex-column">
          <h3>Quick links</h3>
          <Link className="a" to="/">
            {" "}
            About us{" "}
          </Link>
          <Link className="a" to="/profile">
            {" "}
            Profile{" "}
          </Link>
          <Link className="a" to="/dashboard">
            {" "}
            Dashboard{" "}
          </Link>
          <Link className="a" to="/notification">
            {" "}
            Notification preferences{" "}
          </Link>
        </div>
      </div>

      <hr />

      <div className="bottom-section d-flex flex-row justify-content-between">
        <p>
          Copyright © {currentYear}.<br />
          All Rights Reserved by MitWeather
        </p>
        <ul className="social-icons d-flex flex-row">
          <li>
            <a className="facebook" href="https://www.facebook.com/">
              <SMIcon.Facebook
                size={socialMediaIconSize}
                className="social-icon"
              />
            </a>
          </li>
          <li>
            <a className="instagram" href="https://www.instagram.com/">
              <SMIcon.Instagram
                size={socialMediaIconSize}
                className="social-icon"
              />
            </a>
          </li>
          <li>
            <a className="telegram" href="https://www.telegram.com/">
              <SMIcon.Telegram
                size={socialMediaIconSize}
                className="social-icon"
              />
            </a>
          </li>
          <li>
            <a className="linkedin" href="https://www.linkedin.com/">
              <SMIcon.Linkedin
                size={socialMediaIconSize}
                className="social-icon"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );

  // TODO: add real social media links
  // TODO: add real links for navigation
}

export default Footer;
