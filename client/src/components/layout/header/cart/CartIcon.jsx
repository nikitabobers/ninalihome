import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./cartIcon.css";

const icon = (arr) => {
	if (arr.length > 0) {
		return <span className="cart-count">{arr.length}</span>;
	}
};

const CartIcon = () => {
	const cart = useSelector((state) => state.cart);

	const { cartItems } = cart;

	return (
		<div className="cart__nav">
			<Link to="/cart" className="cart-icon">
				<i className="fas fa-shopping-bag fa-lg"></i>
			</Link>
			{icon(cartItems)}
		</div>
	);
};

export { CartIcon };
