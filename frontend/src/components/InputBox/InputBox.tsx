import React, { useState } from "react";
import "./InputBox.css";
import { IconType } from "react-icons";

function InputBox({
	label,
	type,
	InputIcon,
	handleClick,
	checked,
}: {
	label: string;
	type: string;
	InputIcon?: IconType;
	handleClick: any;
	checked?: boolean;
}) {
		const [value, setValue] = useState("");
		const [data, setData] = useState(false);
		const handleCheck= () => { setData(!data); handleClick(data); }

	if(type === "checkbox") {
		
		return (
			<div className="form_input">
				<div className="form_checkbox_box">
					{/* <label htmlFor="">{label}</label> */}
					<p className="checkbox_label">{label}</p>
					<input className="checkbox_input"
					type={type} 
					checked={data} 
					onChange={handleCheck}>
					</input>
				</div>
			</div>
		);
	} else {
		return(
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
}

export default InputBox;
