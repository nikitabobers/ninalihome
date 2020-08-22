import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { countTotalPrice } from "../../../actions/cartActions";
import { Loader } from "../../layout/loader/Loader";
import "./shipping.css";

function Shipping() {
	const cart = useSelector((state) => state.cart);

	const { cartItems, loading, total } = cart;

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(countTotalPrice());
	}, [dispatch]);
	return (
		<div className="container">
			<div className="shipping__section">
				<div>
					<h2 className="">Shipping Details</h2>
					<form className="shipping__form">
						<div className="form--flex">
							<label className="order--label">
								First Name
								<input />
							</label>
							<label className="order--label">
								Last Name
								<input />
							</label>
							<label className="order--label">
								Phone number
								<input />
							</label>
							<label className="order--label">
								Email
								<input />
							</label>
						</div>
						<label className="order--label">
							Address
							<input />
						</label>
						<label className="order--label">
							City
							<input />
						</label>
						<label className="order--label">
							Zip code
							<input />
						</label>
					</form>
					<div>
						<h2 className="">Shipping Methodes</h2>
						<p>Omniva</p>
					</div>
				</div>
				<div className="shipping__cart">
					<h2 className="">Order Summary</h2>
					<div className="cart__section-total">
						<p>Total:</p>
						<span>{cartItems.length > 0 ? total : 0}$</span>
					</div>
					<Link className="btn btn--black" to="/order">
						Place Order
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Shipping;
