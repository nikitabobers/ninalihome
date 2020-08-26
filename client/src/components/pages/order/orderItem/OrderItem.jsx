import React from "react";

function OrderItem({ name, price, image, categories, color, size, qty }) {
	return (
		<div className="cart__item">
			<img
				className="cart__item-image item-image--small"
				src={image}
				alt={name}
			/>
			<div className="cart__item-info">
				<h3 className="cart__item-name">{name}</h3>
				<p className="cart__item-color">{color}</p>
				<p className="cart__item-size">{size}</p>
				<div className="cart__item-qty">
					Quantity: <span>{qty}</span>
				</div>
			</div>
			<div className="cart__item-price">{price}$</div>
		</div>
	);
}

export { OrderItem };
