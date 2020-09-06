import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { countTotalPrice } from "../../../actions/cartActions";
import { FormShipping } from "../../layout/form/formShipping/FromShipping";
import "./shipping.css";

function Shipping(props) {
	const cart = useSelector((state) => state.cart);

	const dispatch = useDispatch();

	const { cartItems, total } = cart;

	useEffect(() => {
		dispatch(countTotalPrice());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="container">
			<div className="shipping__section">
				<div>
					<h2 className="">Shipping Details</h2>
					<FormShipping route={props.history} />
				</div>
				<div className="shipping__cart">
					<h2 className="">Order Summary</h2>
					<div className="cart__section-total">
						<p>Total:</p>
						<span>{cartItems.length > 0 ? total : 0}$</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Shipping;
