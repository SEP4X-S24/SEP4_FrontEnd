import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import AppIcon from "../images/MitWeather-icon.png";
import ProfileIcon from "../images/profile-icon.png";
import NotificationIcon from "../images/notification-icon.png";
import classes from "./Root.module.css";

function Root() {
  return (
    <>
      <header className={classes.header + " p-3"}>
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <img src={AppIcon} height="40" alt="AppIcon" />
            </a>

            <div className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <Link to="/" className="nav-link px-2 text-white">
                MitWeather
              </Link>
            </div>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li></li>
              <li></li>
            </ul>

            <div className="d-flex text-end align-items-center">
              <Link to="/recomendation" className="nav-link px-2 text-white">
                Styles Guide
              </Link>
              <Link to="/" className="nav-link px-2 text-white">
                Dashboard
              </Link>
              <Link to="/notification" className="nav-link px-2 text-white">
                <img src={NotificationIcon} height="40" alt="AppIcon" />
              </Link>
              <Link to="/profile" className="nav-link px-2 text-white">
                <img src={ProfileIcon} height="40" alt="AppIcon" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
