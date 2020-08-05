import React from "react";
import "./button.css";

const Button = ({ children, buttonStyle, onClick }) => {
	return (
		<button className={`btn ${buttonStyle}`} onClick={onClick}>
			{children}
		</button>
	);
};

export { Button };
