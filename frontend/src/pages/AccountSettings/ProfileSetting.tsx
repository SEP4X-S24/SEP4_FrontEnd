import "./ProfileSetting.css";
import InputBox from "../../components/InputBox/InputBox";
import { FaAddressCard, FaEnvelope, FaEye } from "react-icons/fa";
import { useAuth } from "../../services/auth/AuthContext";
import { useState } from "react";
import Account from "../../models/Account";
import { update } from "@react-spring/web";

function ProfileSetting() {
	const { user } = useAuth();

	const [email = user?.email, handleEmail] = useState(user?.email);
	const [password, handlePassword] = useState("");
	const [firstname = user?.firstname, handleFirstname] = useState(user?.firstname	);
	const [lastname = user?.lastname, handleLastname] = useState(user?.lastname);

	const handleEmailChange = (e: any) => {
		handleEmail(e.target.value);
	};
	const handlePasswordChange = (e: any) => {
		handlePassword(e.target.value);
	};
	const handleFirstnameChange = (e: any) => {
		handleFirstname(e.target.value);
	};
	const handleLastnameChange = (e: any) => {
		handleLastname(e.target.value);
	};

	async function sendData(event: React.FormEvent<HTMLFormElement>) {
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
			return;
		} else {
			try {
				const acc: Account = {
					userid: user?.userid,
					email: email,
					password: password,
					firstname: firstname,
					lastname: lastname,
				};
				// await update(acc);
				// display some success message
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
		<div className="profile_settings">
			<h2 className="profile_heading">Profile Settings</h2>
			<form action="" className="profile_form" onSubmit={sendData}>
				<InputBox
					label="First Name"
					type="text"
					handleClick={handleFirstnameChange}
					value={firstname}
					InputIcon={FaAddressCard}
				/>
				<InputBox
					label="Second Name"
					type="text"
					handleClick={handleLastnameChange}
					value={lastname}
					InputIcon={FaAddressCard}
				/>
				<InputBox
					label="Email"
					type="email"
					handleClick={handleEmailChange}
					value={email}
					InputIcon={FaEnvelope}
				/>
				<InputBox
					label="Password"
					type="password"
					handleClick={handlePasswordChange}
					value={password}
					InputIcon={FaEye}
				/>

				<button type="submit" className="profile_button">
					Save
				</button>
			</form>
		</div>
	);
}
export default ProfileSetting;
