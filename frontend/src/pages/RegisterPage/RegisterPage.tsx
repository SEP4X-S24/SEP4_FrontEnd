import React, { useState } from "react";
// import { login } from "../../services/AccountApi";
import "./RegisterPage.css";
// import COLORS from "../../utils/COLORS";
import { FaAddressCard, FaEnvelope, FaEye } from "react-icons/fa";
import InputBox from "../../components/InputBox/InputBox";
import { Link } from "react-router-dom";

function RegisterPage() {
	let email = "";
	let password = "";
	let firstname = "";
	let lastname = "";

	function handleFirstname(data: string) {
		firstname = data;
	}

	function handleLastname(data: string) {
		lastname = data;
	}

	function handleEmail(data: string) {
		email = data;
	}

	function handlePassword(data: string) {
		password = data;
	}
	function sendData() {
		console.log(email + " " + password);
	}

	return (
		<>
			<div className="register_page">
				<div className="register_container">
					<h2 className="register_header">Register</h2>
					<div className="register_signin">
						<h5>Have an account? </h5>
						<Link to="/login">Log in</Link>
					</div>
					<form className="register_form" onSubmit={sendData}>
						<InputBox
							label="First Name"
							type="text"
							InputIcon={FaAddressCard}
							handleClick={handleFirstname}
						/>
						<InputBox
							label="Last Name"
							type="text"
							InputIcon={FaAddressCard}
							handleClick={handleLastname}
						/>
						<InputBox
							label="Email"
							type="email"
							InputIcon={FaEnvelope}
							handleClick={handleEmail}
						/>

						<InputBox
							label="Password"
							type="password"
							InputIcon={FaEye}
							handleClick={handlePassword}
						/>

						<button type="submit" className="register_button">
							Register
						</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default RegisterPage;
