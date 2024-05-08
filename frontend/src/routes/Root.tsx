import React, { useEffect, useState } from "react";
import "./Root.css";
import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function Root() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default Root;
