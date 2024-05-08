import React, { useEffect } from "react";
import "./Root.css";
import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import * as Icon from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import COLORS from "../utils/COLORS";
import styled from "styled-components";
import { useAuth } from "../utils/AuthContext";

function Root() {



  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Root;
