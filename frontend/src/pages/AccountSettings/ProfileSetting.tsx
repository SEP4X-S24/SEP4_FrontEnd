import "./ProfileSetting.css";
import InputBox from "../../components/InputBox/InputBox";
import { FaAddressCard, FaEnvelope, FaEye } from "react-icons/fa";
import { useAuth } from "../../services/auth/AuthContext";
import { useEffect, useState } from "react";
import Account from "../../models/Account";
import { useNavigate } from "react-router-dom";

function ProfileSetting() {
	const { user, update } = useAuth();
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [firstname, setFirstname] = useState<string | any>('');
  const [lastname, setLastname] = useState<string | any>('');

  useEffect(() => {
    if (user) {
      setEmail(user.email);
      setFirstname(user.firstname);
      setLastname(user.lastname);
    }
  }, [user]);

	const handleEmailChange = (e: any) => {
		setEmail(e.target.value);
	};
	const handleNewPasswordChange = (e: any) => {
		setNewPassword(e.target.value);
	};
	const handleCurrentPasswordChange = (e: any) => {
		setCurrentPassword(e.target.value);
	};
	const handleFirstnameChange = (e: any) => {
		setFirstname(e.target.value);
	};
	const handleLastnameChange = (e: any) => {
		setLastname(e.target.value);
	};

	async function updateFunc(email: string, currentPassword: string, firstname: string, lastname: string, newPassword: string) {
			try {	
				
				const acc: Account = {
					email: email, 
					password: currentPassword,
					firstname: firstname,
					lastname: lastname,
				};
				console.log("sending");
				await update(acc, newPassword);
				console.log("sent");
				navigate("/profile")
				alert("Account updated succesfully");
			} catch (error: Error | any) {
				alert(error.message);
			} finally {
				console.log(email, currentPassword, firstname, lastname, "kek");
			}
	}

	function sendData(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (!email || !currentPassword || !newPassword || !firstname || !lastname) {
			alert("Please fill all the fields");
			return;
		} else if (currentPassword.length < 6 || currentPassword.length > 20 || newPassword.length < 6 || newPassword.length > 20) {
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
		}else {
			updateFunc(email, currentPassword, firstname, lastname, newPassword);
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
					label="Current password"
					type="password"
					handleClick={handleCurrentPasswordChange}
					value={currentPassword}
					InputIcon={FaEye}
				/>
				<InputBox
					label="New password"
					type="password"
					handleClick={handleNewPasswordChange}
					value={newPassword}
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
