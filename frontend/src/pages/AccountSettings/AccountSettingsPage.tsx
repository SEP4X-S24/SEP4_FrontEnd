import React from "react";
import "./AccountSettingsPage.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { FaAngleLeft } from "react-icons/fa6";
import { useAuth } from "../../services/auth/AuthContext";

function ProfilePage() {
	const {isAuthenticated} = useAuth()
	const navigate = useNavigate()

	if(!isAuthenticated){
		navigate("/login")
	}

	return (
		<>
			<div className="settings_page">
				<div className="settings_navbar">
					<div className="settings_navbar_backsign">
						<Link to="/">
							<FaAngleLeft color="white" size={45} />
						</Link>
					</div>
					<h3>Account Settings</h3>
					<div className="settings_divider"></div>
					<div className="settings_links">
						<div className="settings_link">
							<Link to={""} className="nav-link" aria-current="page">
								Profile
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
			<Footer />
		</>
	);
}

export default ProfilePage;
