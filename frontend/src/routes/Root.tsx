import React, { useEffect } from "react";
import "./Root.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import * as Icon from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { TbLogout, TbLogin } from "react-icons/tb";
import COLORS from "../utils/COLORS";
import styled from "styled-components";
import { AuthProvider, useAuth } from "../services/auth/AuthContext";

function Root() {
  const navBarIconSize = 30;
  const navBarOnHoverStyle = `
  *{
    width: 100%;
    height: 100%;
    transition: 0.3s;
    padding: 0.1rem;
  }

  :hover{
    color: ${COLORS.primary};
    transition: 0.3s;
  }`;

  const IconWrapper = styled.span`
    ${navBarOnHoverStyle}
  `;

  const { isAuthenticated, user, login, logout } = useAuth();
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
              {isAuthenticated ? (
                <Link to="/recomandation" className="nav-link px-2 text-white">
                  <IconWrapper>
                    <Icon.FaChartPie size={navBarIconSize} />
                  </IconWrapper>
                </Link>
              ) : null}

              <Link
                to="/style_demonstration"
                className="nav-link px-2 text-white"
              >
                <IconWrapper>
                  <IoLogoCss3 size={navBarIconSize} />
                </IconWrapper>
              </Link>
              <Link to="/notification" className="nav-link px-2 text-white">
                <IconWrapper>
                  <Icon.FaBell size={navBarIconSize} />
                </IconWrapper>
              </Link>
              <Link to="/profile" className="nav-link px-2 text-white">
                <IconWrapper>
                  <Icon.FaUser size={navBarIconSize} />
                </IconWrapper>
              </Link>

              {isAuthenticated ? (
                <div className="nav-link px-2 text-white">
                  <IconWrapper>
                    <TbLogout size={navBarIconSize} onClick={logout} />
                  </IconWrapper>
                </div>
              ) : (
                <Link to="/login" className="nav-link px-2 text-white">
                  <IconWrapper>
                    <TbLogin size={navBarIconSize} />
                  </IconWrapper>
                </Link>
              )}
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
