import React, { useEffect, useState } from "react";
// import { login } from "../../services/AccountApi";
import "./RegisterPage.css";
// import COLORS from "../../utils/COLORS";
import { FaAddressCard, FaEnvelope, FaEye } from "react-icons/fa";
import InputBox from "../../components/InputBox/InputBox";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../services/auth/AuthContext";
import Account from "../../models/Account";

function RegisterPage() {

	const [email, handleEmail] = useState("");
	const [password, handlePassword] = useState("");
	const [firstname, handleFirstname] = useState("");
	const [lastname, handleLastname] = useState("");

	const handleEmailChange = (e : any) => {
		handleEmail(e.target.value);
	}
	const handlePasswordChange = (e : any) => {
		handlePassword(e.target.value);
	}
	const handleFirstnameChange = (e : any) => {
		handleFirstname(e.target.value);
	}
	const handleLastnameChange = (e : any) => {
		handleLastname(e.target.value);
	}
	

	const { register } = useAuth();
	const navigate = useNavigate();

	async function handleRegister(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (!email || !password || !firstname || !lastname) {
			alert("Please fill all the fields");
			return;
		} else if (password.length < 6 || password.length > 20) {
			alert("Password must be between 6 and 20 characters");
			return;
		} else if (email.length > 50) {
			alert("Email must be less than 50 characters");
			return;
		} else if (
			firstname.length > 50 ||
			lastname.length > 50 ||
			firstname.length < 1 ||
			lastname.length < 1
		) {
			alert("First name and last name must be between 1 and 50 characters");
			return
		} else {
			try {
				const acc: Account = {
					email: email,
					password: password,
					firstname: firstname,
					lastname: lastname,
				};
				await register(acc);
				navigate('/login')
			} catch (error: Error | any) {
				alert(error.message);
			} finally {
				handleEmail("");
				handlePassword("");
				handleFirstname("");
				handleLastname("");
				console.log(email, password, firstname, lastname, "kek");
			}
		}
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
					<form className="register_form" onSubmit={handleRegister}>
						<InputBox
							label="First Name"
							type="text"
							InputIcon={FaAddressCard}
							value={firstname}
							handleClick={handleFirstnameChange}
						/>
						<InputBox
							label="Last Name"
							type="text"
							InputIcon={FaAddressCard}
							value={lastname}
							handleClick={handleLastnameChange}
						/>
						<InputBox
							label="Email"
							type="email"
							InputIcon={FaEnvelope}
							value={email}
							handleClick={handleEmailChange}
						/>

						<InputBox
							label="Password"
							type="password"
							InputIcon={FaEye}
							value={password}
							handleClick={handlePasswordChange}
						/>

						<button type="submit" className="register_button">
							Register
						</button>
					</form>
					<div className="back_button">
						<Link className="back" to={"/"}>
							Or go back
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default RegisterPage;
