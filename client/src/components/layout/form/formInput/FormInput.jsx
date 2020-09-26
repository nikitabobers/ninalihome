import React from "react";
import "./formInput.css";

function FormInput({
	label,
	type,
	name,
	errorName,
	errorMessage,
	onChangeFunction,
}) {
	return (
		<label className="label">
			{label}
			<input
				name={name}
				type={type}
				errorname={errorName}
				onChange={onChangeFunction}
			/>
			<div className="error--message">{errorMessage}</div>
		</label>
	);
}

export { FormInput };
