import React from "react";
import "./AccountSettingsPage.css";
import { Link, Outlet } from "react-router-dom";

function ProfilePage(){
	return (
		<>
			<div className="settings_page">
				<div className="settings_navbar">
					<h3>Account Settings</h3>
					<div className="settings_divider"></div>
					<div className="settings_links">
						<div className="settings_link">
							<Link to={""} className="nav-link" aria-current="page">
								Profile
							</Link>
						</div>
						<div className="settings_link">
							<Link to={`notificationSettings`} className="nav-link" >
								Notifications
							</Link>
						</div>
						<div className="settings_link">
							
							<Link to={`recomendationSettings`} className="nav-link">
								Recommendations
							</Link>
						</div>
					</div>
				</div>
				<div className="settings_container">
					<Outlet />
				</div>
			</div>
		</>
	);
}

export default ProfilePage;
