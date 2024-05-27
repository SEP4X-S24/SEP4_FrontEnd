import React, { useEffect, useState } from "react";
import "./LoginPage.css";
import InputBox from "../../components/InputBox/InputBox";
import { Link } from "react-router-dom";

import { FaAngleLeft, FaEnvelope, FaEye } from "react-icons/fa6";
import { useAuth } from "../../services/auth/AuthContext";
import { useNavigate } from "react-router-dom";
import Account from "../../models/Account";
import { Colors } from "chart.js";

function LoginPage() {
	const [email, handleEmail] = useState("");
	const [password, handlePassword] = useState("");

	const handleEmailChange = (e: any) => {
		handleEmail(e.target.value);
	};
	const handlePasswordChange = (e: any) => {
		handlePassword(e.target.value);
	};

	const { isAuthenticated, login } = useAuth();

	const navigate = useNavigate();

	useEffect(() => {
		if (isAuthenticated) {
			navigate("/");
		}
	}, [isAuthenticated, navigate]);

	async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (!email || !password) {
			alert("Please fill all the fields");
			return;
		} else if (password.length < 6 || password.length > 20) {
			alert("Password must be between 6 and 20 characters");
			return;
		} else if (email.length > 50) {
			alert("Email must be less than 50 characters");
			return;
		} else {
			try {
				const acc: Account = { email: email, password: password };
				await login(acc);
				console.log(acc.email + " " + acc.password);
			} catch (error: Error | any) {
				alert(error.message);
			} finally {
			handlePassword("");
			}
		}
	}

	return (
		<>
			<div className="login_page">
				<div className="login_container">
					<h2 className="login_header">Login</h2>
					<div className="login_signin">
						<h5>Don't have an account? </h5>
						<Link to={"/Register"}>Sign in</Link>
					</div>

					<form className="login_form" onSubmit={handleLogin}>
						<InputBox
							label="Email"
							type="email"
							value={email}
							InputIcon={FaEnvelope}
							handleClick={handleEmailChange}
						/>

						<InputBox
							label="Password"
							type="password"
							value={password}
							InputIcon={FaEye}
							handleClick={handlePasswordChange}
						/>

						<button type="submit" className="login_button">
							Login
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

export default LoginPage;
