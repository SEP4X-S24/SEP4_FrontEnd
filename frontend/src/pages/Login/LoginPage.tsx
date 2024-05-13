import React, { useEffect } from "react";
import "./LoginPage.css";
import InputBox from "../../components/InputBox/InputBox";
import { Link } from "react-router-dom";

import { FaEnvelope, FaEye } from "react-icons/fa6";
import { useAuth } from "../../services/auth/AuthContext";
import { useNavigate } from "react-router-dom";

function LoginPage() {
	let email = "";
	let password = "";

	function handleEmail(data: string) {
		email = data;
	}

	function handlePassword(data: string) {
		password = data;
	}

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
		} else if (!email.includes("@") || !email.includes(".")) {
			alert("Please enter a valid email");
			return;
		} else if (email.length > 50) {
			alert("Email must be less than 50 characters");
			return;
		} else {
			try {
				await login({ email: email, password: password });
			} catch (error: Error | any) {
				alert(error.message);
			} finally {
				email = "";
				password = "";
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
							InputIcon={FaEnvelope}
							handleClick={handleEmail}
						/>

						<InputBox
							label="Password"
							type="password"
							InputIcon={FaEye}
							handleClick={handlePassword}
						/>

						<button type="submit" className="login_button">
							Login
						</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default LoginPage;
