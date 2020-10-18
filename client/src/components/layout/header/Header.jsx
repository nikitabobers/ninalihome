import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import { CartIcon } from "./cart/CartIcon";
import { Hamburger } from "./navbar/hamburger/Hamburger";
import "./header.css";

const Header = () => {
	const [openMenu, setOpenMenu] = useState(false);

	const address = window.location.pathname;

	useEffect(() => {
		if (openMenu) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "visible";
		}
	}, [openMenu]);

	if (address.includes("admin")) return null;

	const handleClick = (e) => {
		console.log(e.target);
		if (
			e.target.className === "bg-media" ||
			e.target.className === "navbar__link" ||
			e.target.className === "nav--icon_span" ||
			e.target.className === "fas fa-shopping-bag fa-lg"
		) {
			console.log(e);
			setOpenMenu(!openMenu);
		}
	};

	return (
		<div className="header">
			<div className="container">
				<div
					className={`header__section ${openMenu ? "header--active" : ""}`}
					onClick={(e) => handleClick(e)}
				>
					<Link to="/" className="header__logo">
						ninalihome
					</Link>
					<Navbar onClick={handleClick} />
					<CartIcon />
					<Hamburger open={openMenu} onClick={handleClick} />
				</div>
				<hr />
			</div>
		</div>
	);
};

export default Header;
