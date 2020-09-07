import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeQty } from "../../../../state/localStorage";
import { countTotalPrice } from "../../../../actions/cartActions";
import { Button } from "../../../layout/button/Button";
import { Select } from "../../../layout/select/Select";
import "./cartItem.css";

function CartItem({
	name,
	id,
	price,
	image,
	categories,
	color,
	size,
	onClick,
	qty,
}) {
	const quantityList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	const dispatch = useDispatch();

	const [selectedQty, setQty] = useState(qty);

	const handleChange = (e) => {
		setQty(e.target.value);
		changeQty(e.target.value, id);
		dispatch(countTotalPrice());
	};

	return (
		<div className="cart__item">
			<img className="cart__item-image" src={image} alt={name} />
			<div className="cart__item-info">
				<h3 className="cart__item-name">{name}</h3>
				<p className="cart__item-categories">{categories}</p>
				<p className="cart__item-color">{color}</p>
				<p className="cart__item-size">{size}</p>
				<div className="cart__item-qty">
					<label>
						Select
						<Select
							list={quantityList}
							value={selectedQty}
							onChange={handleChange}
							selectStyle="select--border"
						/>
					</label>
				</div>
				<Button buttonStyle="btn--remove" onClick={onClick}>
					Remove
				</Button>
			</div>
			<div className="cart__item-price">{price}$</div>
		</div>
	);
}

export { CartItem };
