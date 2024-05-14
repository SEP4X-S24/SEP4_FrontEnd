import React, { useEffect, useState } from "react";
import "./Root.css";
import { Link, Outlet, useNavigate } from "react-router-dom";

function Root() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default Root;
