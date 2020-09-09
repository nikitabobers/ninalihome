import React from "react";
import { useSelector } from "react-redux";
import "./profile.css";
import { Link } from "react-router-dom";

const icon = (arr) => {
	if (arr.length > 0) {
		return <span className="cart-count">{arr.length}</span>;
	}
};

const Profile = () => {
	const cart = useSelector((state) => state.cart);

	const { cartItems } = cart;

	return (
		<div className="profile__menu">
			<div className="profile__item">
				<Link to="/cart" className="cart-icon">
					<i className="fas fa-shopping-bag fa-lg"></i>
				</Link>
				{icon(cartItems)}
			</div>
		</div>
	);
};

export default Profile;
