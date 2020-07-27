import React from "react";
import { Button } from "../../../layout/button/Button";
import "./cartItem.css";

function CartItem({ name, price, image, categories, color, size, qty }) {
	return (
		<div className="cart__item">
			<img className="cart__item-image" src={image} />
			<div className="cart__item-info">
				<h3 className="cart__item-name">{name}</h3>
				<p className="cart__item-categories">{categories}</p>
				<p className="cart__item-color">{color}</p>
				<p className="cart__item-size">{size}</p>
				<p className="cart__item-qty">{qty}</p>
				<Button buttonStyle="btn--remove">Remove</Button>
			</div>
			<div className="cart__item-price">{price}</div>
		</div>
	);
}

export { CartItem };
