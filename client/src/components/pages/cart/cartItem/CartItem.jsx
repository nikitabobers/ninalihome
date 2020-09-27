import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeQty } from "../../../../state/productLS";
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
		<div className="product__item">
			<img className="product__item-image" src={image} alt={name} />
			<div className="product__item-info">
				<h3 className="product__item-name">{name}</h3>
				<p className="product__item-categories">{categories}</p>
				<p className="product__item-color">{color}</p>
				<p className="product__item-size">{size}</p>
				<div className="product__item-qty">
					<label>
						Select
						<Select
							list={quantityList}
							value={selectedQty}
							onChange={handleChange}
							selectStyle="select--border"
							selected={selectedQty}
						/>
					</label>
				</div>
				<Button buttonStyle="btn--remove" onClick={onClick}>
					Remove
				</Button>
			</div>
			<div className="product__item-price">{price}$</div>
		</div>
	);
}

export { CartItem };
