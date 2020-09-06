import React from "react";
import Navbar from "./navbar/Navbar";
import Profile from "./profile/Profile";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
	return (
		<div className="header">
			<div className="container">
				<div className="header__bottom-window">
					<Link to="/" className="header__logo">
						ninalihome
					</Link>
					<Navbar />
					<Profile />
				</div>
				<hr />
			</div>
		</div>
	);
};

export default Header;
