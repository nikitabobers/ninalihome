import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { countTotalPrice, addShipping } from "../../../actions/cartActions";
import { Select } from "../../layout/select/Select";
import { FormInput } from "../../layout/formInput/FormInput";
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
	const [type, setType] = useState("");
	const [errorState, setErrorState] = useState({
		firstNameError: "",
		lastNameError: "",
		phoneError: "",
		emailError: "",
		addressError: "",
		cityError: "",
		zipCodeError: "",
		countryError: "",
		typeError: "",
	});

	const cart = useSelector((state) => state.cart);

	const { cartItems, total } = cart;

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(countTotalPrice());
	}, [dispatch]);

	const countries = countryList().getData();

	const formSubmit = (event) => {
		event.preventDefault();
		const data = {
			firstName,
			lastName,
			phone,
			email,
			address,
			city,
			zipCode,
			country,
			type,
		};

		for (let key in data) {
			printErrorMessage(key);
		}
		validate();
		if (isValid) {
			event.target.reset();
			props.history.push("/order");
			dispatch(addShipping({ data }));
		}
	};

	let isValid = false;

	const validate = () => {
		const errorValues = Object.values(errorState);

		for (let key of errorValues) {
			if (key !== "") {
				return (isValid = false);
			}
		}
		return (isValid = true);
	};

	const clearErrorMessage = (errorType) => {
		setErrorState((prev) => ({ ...prev, [errorType]: "" }));
	};

	const setErrorMessage = (errorType, message) => {
		setErrorState((prev) => ({ ...prev, [errorType]: message }));
	};

	const printErrorMessage = (inputType) => {
		if (inputType === "firstName") {
			if (firstName.length < 2) {
				return setErrorMessage(inputType + "Error", "Minimum is 2 characters");
			}
			clearErrorMessage(inputType + "Error");
		}
		if (inputType === "lastName") {
			if (lastName.length < 2) {
				return setErrorMessage(inputType + "Error", "Minimum is 2 characters");
			}
			clearErrorMessage(inputType + "Error");
		}
		if (inputType === "phone") {
			if (phone.length < 2) {
				return setErrorMessage(
					inputType + "Error",
					"Enter a valid phone number"
				);
			}
			clearErrorMessage(inputType + "Error");
		}
		if (inputType === "email") {
			if (email.length < 2) {
				return setErrorMessage(inputType + "Error", "Enter a valid email");
			}
			clearErrorMessage(inputType + "Error");
		}
		if (inputType === "address") {
			if (address.length < 10) {
				return setErrorMessage(inputType + "Error", "Enter a valid address");
			}
			clearErrorMessage(inputType + "Error");
		}
		if (inputType === "city") {
			if (city.length < 2) {
				return setErrorMessage(inputType + "Error", "Enter a valid city");
			}
			clearErrorMessage(inputType + "Error");
		}
		if (inputType === "zipCode") {
			if (zipCode.length < 6) {
				return setErrorMessage(inputType + "Error", "Enter a valid zipCode");
			}
			clearErrorMessage(inputType + "Error");
		}
		if (inputType === "country") {
			if (country.length < 2) {
				return setErrorMessage(inputType + "Error", "Select country");
			}
			clearErrorMessage(inputType + "Error");
		}
		if (inputType === "type") {
			if (type.length < 2) {
				return setErrorMessage(inputType + "Error", "Select delivery method");
			}
			clearErrorMessage(inputType + "Error");
		}
	};

	useEffect(() => printErrorMessage());

	return (
		<div className="container">
			<div className="shipping__section">
				<div>
					<h2 className="">Shipping Details</h2>
					<form className="shipping__form" onSubmit={formSubmit}>
						<div className="form-grid form-grid--2">
							<FormInput
								type="text"
								label={"First Name"}
								onChangeFunction={setFirstName}
								errorMessage={errorState.firstNameError}
							/>
							<FormInput
								type="text"
								label={"Last Name"}
								onChangeFunction={setLastName}
								errorMessage={errorState.lastNameError}
							/>
							<FormInput
								type="tel"
								label={"Phone Number"}
								onChangeFunction={setPhone}
								errorMessage={errorState.phoneError}
							/>
							<FormInput
								type="email"
								label={"Email"}
								onChangeFunction={setEmail}
								errorMessage={errorState.emailError}
							/>
						</div>
						<FormInput
							type="text"
							label={"Address"}
							onChangeFunction={setAddress}
							errorMessage={errorState.addressError}
						/>
						<div className="form-grid form-grid--3">
							<FormInput
								type="text"
								label={"City"}
								onChangeFunction={setCity}
								errorMessage={errorState.cityError}
							/>
							<FormInput
								type="text"
								label={"Zip Code"}
								onChangeFunction={setZipCode}
								errorMessage={errorState.zipCodeError}
							/>
							<label className="order--label">
								County
								<Select
									list={countries}
									onChange={(e) => setCountry(e.target.value)}
									value={countries}
								/>
								<div className="error--message">{errorState.countryError}</div>
							</label>
						</div>
						<div className="shipping__method">
							<h2 className="">Shipping Methodes</h2>
							<div className="shipping__method--form">
								<label className="order--label order--label-radio">
									<input
										type="radio"
										value="Omniva"
										checked={type === "Omniva"}
										onChange={(e) => setType(e.target.value)}
									/>
									Omniva
								</label>
								<label className="order--label order--label-radio">
									<input
										type="radio"
										value="DPD"
										checked={type === "DPD"}
										onChange={(e) => setType(e.target.value)}
									/>
									DPD
									<div className="error--message">{errorState.typeError}</div>
								</label>
							</div>
						</div>
						<input type="submit" value="Submit" className="btn btn--black" />
					</form>
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
