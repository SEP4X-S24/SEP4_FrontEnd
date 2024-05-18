import React, { useEffect, useState } from "react";
import "./InputBox.css";
import { IconType } from "react-icons";

function InputBox({
	label,
	type,
	InputIcon,
	handleClick,
	checked,
	value,
}: {
	label: string;
	type: string;
	InputIcon?: IconType;
	handleClick: any;
	checked?: boolean;
	value?: any;
}) {
	// const [value, setValue] = useState("");
	const [data, setData] = useState(false);
	const handleCheck= () => { setData(!data); handleClick(data); }
	// setValue('');

	if (type === "checkbox") {
		return (
			<div className="form_input">
				<div className="form_checkbox_box">
					{/* <label htmlFor="">{label}</label> */}
					<p className="checkbox_label">{label}</p>
					<input
						className="checkbox_input"
						type={type}
						checked={data}
						onChange={handleCheck}
					></input>
				</div>
			</div>
		);
	} else {
		return (
			<div className="form_input">
				<div className="form_input_box">
					<label htmlFor="">{label}</label>
					<input 
					type={type} 
					value={value} 
					onChange={handleClick}></input>
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
}

export default InputBox;
