import "./ProfileSetting.css";
import InputBox from "../../components/InputBox/InputBox";
import { FaAddressCard, FaEnvelope, FaEye } from "react-icons/fa";
import { useAuth } from "../../services/auth/AuthContext";
import { useState } from "react";

function ProfileSetting() {
	const {user} = useAuth()
	
	const [email, handleEmail] = useState(user?.email);
	const [password, handlePassword] = useState();
	const [firstname, handleFirstname] = useState(user?.firstname);
	const [lastname, handleLastname] = useState(user?.lastname);

	console.log(user?.email + " " + user?.firstname + " " + user?.lastname);

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

	function sendData() {
		// change on implementation of logic
		console.log(user)
		console.log(firstname + " " + lastname + " " + email + " " + password);
	}
	return (
		<div className="profile_settings">
			<h2 className="profile_heading">Profile Settings</h2>
			<form action=""  className="profile_form">
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

				<button type="submit" onClick={sendData} className="profile_button">
					Save
				</button>
			</form>
		</div>
	);
}
export default ProfileSetting;
