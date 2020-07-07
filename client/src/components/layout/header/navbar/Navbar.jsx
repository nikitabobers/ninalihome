import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
	return (
		<nav className="navbar stroke">
			<ul className="navbar__list">
				<li className="navbar__item">
					<Link to="/">Home</Link>
				</li>
				<li className="navbar__item">
					<Link to="/shop">Shop</Link>
				</li>
				<li className="navbar__item">
					<Link to="/about">About</Link>
				</li>
				<li className="navbar__item">
					<Link to="/blog">Blog</Link>
				</li>
				<li className="navbar__item">
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
