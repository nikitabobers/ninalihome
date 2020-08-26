import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { countTotalPrice } from "../../../actions/cartActions";
import { orderAdd } from "../../../actions/orderActions";
import { Select } from "../../layout/select/Select";
import countryList from "react-select-country-list";
import "./shipping.css";

function Shipping(props) {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [zipCode, setZipCode] = useState("");
	const [country, setCountry] = useState("");

	const cart = useSelector((state) => state.cart);

	const { cartItems, total } = cart;

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(countTotalPrice());
	}, [dispatch]);

	const countries = countryList().getData();

	const formSubmit = (event) => {
		event.preventDefault();
		dispatch(
			orderAdd({
				firstName,
				lastName,
				phone,
				email,
				address,
				city,
				zipCode,
				country,
			})
		);
		event.target.reset();
		props.history.push("/order");
	};

	return (
		<div className="container">
			<div className="shipping__section">
				<div>
					<h2 className="">Shipping Details</h2>
					<form className="shipping__form" onSubmit={formSubmit}>
						<div className="form-grid form-grid--2">
							<label className="order--label">
								First Name
								<input onChange={(e) => setFirstName(e.target.value)} />
							</label>
							<label className="order--label">
								Last Name
								<input onChange={(e) => setLastName(e.target.value)} />
							</label>
							<label className="order--label">
								Phone number
								<input onChange={(e) => setPhone(e.target.value)} />
							</label>
							<label className="order--label">
								Email
								<input onChange={(e) => setEmail(e.target.value)} />
							</label>
						</div>
						<label className="order--label">
							Address
							<input onChange={(e) => setAddress(e.target.value)} />
						</label>
						<div className="form-grid form-grid--3">
							<label className="order--label">
								County
								<Select
									list={countries}
									onChange={(e) => setCountry(e.target.value)}
									value={countries}
								/>
							</label>
							<label className="order--label">
								City
								<input onChange={(e) => setCity(e.target.value)} />
							</label>
							<label className="order--label">
								Zip code
								<input onChange={(e) => setZipCode(e.target.value)} />
							</label>
						</div>
						<input type="submit" value="Submit" className="btn btn--black" />
					</form>
					<div className="shipping__method">
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
				</div>
			</div>
		</div>
	);
}

export default Shipping;
