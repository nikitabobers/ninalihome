import React from "react";
import "./form.css";

function Form(props) {
	return (
		<form className={props.className} onSubmit={props.onSubmit}>
			{props.children}
		</form>
	);
}

export { Form };
