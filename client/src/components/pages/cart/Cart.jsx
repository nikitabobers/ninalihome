import React from "react";
import { useSelector } from "react-redux";

const Cart = (props) => {
	const id = props.match.params.id;

	const cart = useSelector((state) => state.cart);

	console.log(id);
	return (
		<div className="container">
			<div className="cart-section">cart</div>
		</div>
	);
};

export default Cart;
