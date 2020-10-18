import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
	return (
		<nav className="navbar">
			<ul className="navbar__list">
				<li className="navbar__item">
					<Link className="navbar__link" to="/">
						Home
					</Link>
				</li>
				<li className="navbar__item">
					<Link className="navbar__link" to="/shop">
						Shop
					</Link>
				</li>
				<li className="navbar__item">
					<Link className="navbar__link" to="/about">
						About
					</Link>
				</li>
				<li className="navbar__item">
					<Link className="navbar__link" to="/blog">
						Blog
					</Link>
				</li>
				<li className="navbar__item">
					<Link className="navbar__link" to="/contact">
						Contact
					</Link>
				</li>
			</ul>
			<div className="bg-media"></div>
		</nav>
	);
};

export default Navbar;
