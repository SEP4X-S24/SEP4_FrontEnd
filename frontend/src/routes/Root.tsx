import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import "./Root.css";

function Root() {
  return (
    <>
      <div className="header">
        <nav>
          <div>Header Element</div>
          <Link to="/">Home </Link>
          <Link to="/profile">Profile</Link>
        </nav>
      </div>
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
