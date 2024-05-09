import React, { useState } from "react";
import COLORS from "../../utils/COLORS";
import { FaAddressCard, FaEnvelope, FaEye } from "react-icons/fa";
import "./InputBox.css";
import { IconType } from "react-icons";

function InputBox({
	label,
	type,
	InputIcon,
	handleClick,
}: {
	label: string;
	type: string;
	InputIcon?: IconType;
	handleClick: any;
}) {
	const [value, setValue] = useState("");

	return (
		<div className="form_input">
			<div className="form_input_box">
				<label htmlFor="">{label}</label>
				<input
					type={type}
					value={value}
					onChange={(e) => setValue(e.target.value)}
					onSubmit={handleClick(value)}
				></input>
			</div>
			{InputIcon && (
				<InputIcon
					style={{
						width: "40px",
						height: "40px",
						fill: "var(--color-secondary)",
					}}
				/>
			)}
		</div>
	);
}

export default InputBox;
