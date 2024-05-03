import React from "react";
import "./Root.css";
import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import * as Icon from "react-icons/fa";
import { COLORS } from "../utils/COLORS";
import styled from "styled-components";

function Root() {
  const navBarIconSize = 30;
  const navBarIconColor = COLORS().white;
  const navBarOnHoverStyle = `
  *{
    transition: 0.5s;
    padding: 0.5rem;
  }

  :hover{
    color: ${COLORS().primary};
    transition: 0.3s;
  }`;
  const BellIcon = styled(Icon.FaBell)`
    ${navBarOnHoverStyle}
  `;
  const UserIcon = styled(Icon.FaUser)`
    ${navBarOnHoverStyle}
  `;
  const DashboardIcon = styled(Icon.FaChartPie)`
    ${navBarOnHoverStyle}
  `;
  return (
    <>
      <header className="header p-2">
        <div className="container">
          <div className="navbar d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <div className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <Link to="/" className="nav-link px-2">
                <h3 id="header-name">MitWeather</h3>
              </Link>
            </div>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li></li>
              <li></li>
            </ul>

            <div className="d-flex text-end align-items-center">
              <Link to="/" className="nav-link px-2 text-white">
                <DashboardIcon size={navBarIconSize}></DashboardIcon>
              </Link>
              <Link to="/notification" className="nav-link px-2 text-white">
                <BellIcon size={navBarIconSize}></BellIcon>
              </Link>
              <Link to="/profile" className="nav-link px-2 text-white">
                <UserIcon size={navBarIconSize}></UserIcon>
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
