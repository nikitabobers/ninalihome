import React from "react";
import "./cartItem.css";

function CartItem({ name, price, image }) {
	return (
		<div className="cart__item">
			<p className="cart__item-name">{name}</p>
			<p className="cart__item-price">{price}</p>
			<img className="cart__item-image" src={image} />
		</div>
	);
}

export { CartItem };
