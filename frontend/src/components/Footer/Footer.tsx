import React from "react";
import "./Footer.css";
import * as SMIcon from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function Footer() {
  const aboutDetails = "Lorem ipsum In convallis justo at eleifend sagittis.";
  const currentYear = new Date().getFullYear();
  const socialMediaIconSize = 35;

  return (
    <>
      <div className="footer">
        <div className="container main-section d-flex flex-wrap">
          <div className="footer-section about-section col-md-6">
            <h3>About</h3>
            <p className="m-0">{aboutDetails}</p>
          </div>

          <div className="footer-section menu-section col-md col-sm-12 d-flex flex-column">
            <h3>Menu</h3>
            <Link className="a" to="/">
              Home
            </Link>
            <Link className="a" to="/profile">
              Profile
            </Link>
            <Link className="a" to="/dashboard">
              Dashboard
            </Link>
            <Link className="a" to="/recommendation">
              Recommendations
            </Link>
          </div>

          <div className="footer-section menu-section col-md col-sm-12 d-flex flex-column">
            <h3>Quick links</h3>
            <Link className="a" to="/">
              About us
            </Link>
            <Link className="a" to="/profile">
              Profile
            </Link>
            <Link className="a" to="/dashboard">
              Dashboard
            </Link>
            <Link className="a" to="/notification">
              Notification preferences
            </Link>
          </div>
        </div>

        <hr />

        <div className="container bottom-section d-flex flex-row justify-content-between">
          <p>
            MitWeather © {currentYear}.<br />
          </p>
          <ul className="social-icons d-flex">
            <li>
              <a
                className="facebook"
                href="https://www.facebook.com/denmarkweather"
              >
                <SMIcon.Facebook
                  size={socialMediaIconSize}
                  className="social-icon"
                />
              </a>
            </li>
            <li>
              <a
                className="linkedin"
                href="https://www.linkedin.com/company/weather-company/"
              >
                <SMIcon.Linkedin
                  size={socialMediaIconSize}
                  className="social-icon"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
