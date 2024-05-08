import React, { useEffect, useState } from "react";
import "./Root.css";
import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import * as Icon from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { TbLogout, TbLogin } from "react-icons/tb";
import COLORS from "../utils/COLORS";
import styled from "styled-components";
import { AuthProvider, useAuth } from "../services/auth/AuthContext";

function Root() {
  const [navBarOnHoverStyle, setNavBarOnHoverStyle] = useState("");

  useEffect(() => {
    console.log(COLORS);
    console.log(COLORS.black)

    setNavBarOnHoverStyle(`
    *{
      transition: 0.5s;
      padding: 0.5rem;
    }
  
    :hover{
      color: ${COLORS.primary};
      transition: 0.3s;
    }`);
  }, []);

  const navBarIconSize = 30;

  const BellIcon = styled(Icon.FaBell)`
    ${navBarOnHoverStyle}
  `;
  const UserIcon = styled(Icon.FaUser)`
    ${navBarOnHoverStyle}
  `;
  const DashboardIcon = styled(Icon.FaChartPie)`
    ${navBarOnHoverStyle}
  `;
  const StyleIcon = styled(IoLogoCss3)`
    ${navBarOnHoverStyle}
  `;
  const LoginIcon = styled(TbLogin)`
    ${navBarOnHoverStyle}
  `;
  const LogoutIcon = styled(TbLogout)`
    ${navBarOnHoverStyle}
  `;

  const {
    isAuthenticated: authenticated,
    login: login,
    logout: logout,
  } = useAuth();
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
              {authenticated ? (
                <Link to="/recomandation" className="nav-link px-2 text-white">
                  <DashboardIcon size={navBarIconSize}></DashboardIcon>
                </Link>
              ) : null}

              <Link
                to="/style_demonstration"
                className="nav-link px-2 text-white"
              >
                <StyleIcon size={navBarIconSize}></StyleIcon>
              </Link>
              <Link to="/notification" className="nav-link px-2 text-white">
                <BellIcon size={navBarIconSize}></BellIcon>
              </Link>
              <Link to="/profile" className="nav-link px-2 text-white">
                <UserIcon size={navBarIconSize}></UserIcon>
              </Link>

              <div className="nav-link px-2 text-white">
                {authenticated ? (
                  <LogoutIcon
                    size={navBarIconSize}
                    onClick={logout}
                  ></LogoutIcon>
                ) : (
                  <LoginIcon size={navBarIconSize} onClick={login}></LoginIcon>
                )}
              </div>
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
