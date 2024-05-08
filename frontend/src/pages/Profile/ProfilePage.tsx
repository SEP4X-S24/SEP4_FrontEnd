import React from "react";
import "./ProfilePage.css";
import { Link, Outlet } from "react-router-dom";

function ProfilePage() {
  return (
    <div className="d-flex">
      <div className="d-flex align-items-center flex-column sidebar">
        <h3>Account Settings</h3>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to={""} className="nav-link text-white" aria-current="page">
              Profile
            </Link>
          </li>
          <li>
            <Link to={`notificationSettings`} className="nav-link text-white">
              Notification
            </Link>
          </li>
          <li>
            <Link to={`recomendationSettings`} className="nav-link text-white">
              Recomendation
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

export default ProfilePage;
