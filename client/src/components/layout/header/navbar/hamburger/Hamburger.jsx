import React from "react";
import "./hamburger.css";

const Hamburger = ({ open, onClick }) => {
	return (
		<div className={`nav--icon ${open ? "open" : ""}`} onClick={onClick}>
			<span className="nav--icon_span"></span>
			<span className="nav--icon_span"></span>
			<span className="nav--icon_span"></span>
			<span className="nav--icon_span"></span>
		</div>
	);
};

export { Hamburger };
