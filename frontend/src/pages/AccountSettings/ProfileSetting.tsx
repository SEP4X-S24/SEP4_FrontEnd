import React, { useState } from "react";
import "./ProfileSetting.css";
import InputBox from "../../components/InputBox/InputBox";
import { FaAddressCard, FaEnvelope, FaEye } from "react-icons/fa";

function ProfileSetting() {
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
    console.log(firstname + " " + lastname);
  }
  return (
		<div className="profile_settings">
			<h2 className="profile_heading">Profile Settings</h2>
			<form action="" onSubmit={sendData} className="profile_form">
				<InputBox
					label="First Name"
					type="text"
					handleClick={handleFirstname}
					InputIcon={FaAddressCard}
				/>
				<InputBox
					label="Second Name"
					type="text"
					handleClick={handleLastname}
					InputIcon={FaAddressCard}
				/>
				<InputBox
					label="Email"
					type="email"
					handleClick={handleEmail}
					InputIcon={FaEnvelope}
				/>
				<InputBox
					label="Password"
					type="password"
					handleClick={handlePassword}
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
