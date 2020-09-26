import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addShipping } from "../../../../actions/cartActions";
import { Select } from "../../../layout/select/Select";
import { Form } from "../Form";
import { FormInput } from "../formInput/FormInput";
import countryList from "react-select-country-list";

function FormShipping({ route }) {
	const dispatch = useDispatch();

	const countries = countryList().getData();

	const initialState = {
		firstName: "",
		lastName: "",
		phone: "",
		email: "",
		address: "",
		city: "",
		zipCode: "",
		country: "",
		type: "",
	};

	const [shippingState, setShippingState] = useState(initialState);

	const [errorState, setErrorState] = useState({
		firstNameError: null,
		lastNameError: null,
		phoneError: null,
		emailError: null,
		addressError: null,
		cityError: null,
		zipCodeError: null,
		countryError: null,
		typeError: null,
	});

	const handleSubmit = (event) => {
		event.preventDefault();

		const errorValues = Object.values(errorState);
		const stateValues = Object.values(shippingState);
		const stateKeys = Object.keys(shippingState);

		// ckeck if initialState values are empty
		for (let i = 0; i < stateKeys.length; i++) {
			if (stateValues[i] === "") {
				validate(stateKeys[i], stateValues[i]);
			}
		}

		// check if errorState messages are empty
		let isEmpty = false;

		for (let key of errorValues) {
			if (key !== "" || key === null) {
				return isEmpty;
			} else {
				isEmpty = true;
			}
		}

		if (isEmpty) {
			// event.target.reset();
			dispatch(addShipping(shippingState));
			route.push("/order");
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		// print errorMessage on event change
		validate(name, value);

		// set form state values
		setShippingState((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const validate = (name, value) => {
		switch (name) {
			case "firstName":
				setErrorState((prev) => ({
					...prev,
					[name + "Error"]: value.length < 2 ? "Minimum 2 characters" : "",
				}));
				break;
			case "lastName":
				setErrorState((prev) => ({
					...prev,
					[name + "Error"]: value.length < 2 ? "Minimum 2 characters" : "",
				}));
				break;
			case "phone":
				setErrorState((prev) => ({
					...prev,
					[name + "Error"]:
						value.length < 2 ? "Enter a valid phone number" : "",
				}));
				break;
			case "email":
				setErrorState((prev) => ({
					...prev,
					[name + "Error"]: value.length < 2 ? "Enter a valid email" : "",
				}));
				break;
			case "address":
				setErrorState((prev) => ({
					...prev,
					[name + "Error"]: value.length < 2 ? "Enter a valid address" : "",
				}));
				break;
			case "city":
				setErrorState((prev) => ({
					...prev,
					[name + "Error"]: value.length < 2 ? "Enter a valid city" : "",
				}));
				break;
			case "zipCode":
				setErrorState((prev) => ({
					...prev,
					[name + "Error"]: value.length < 2 ? "Enter a valid zipCode" : "",
				}));
				break;
			case "country":
				setErrorState((prev) => ({
					...prev,
					[name + "Error"]: value.length < 2 ? "Select country" : "",
				}));
				break;
			case "type":
				setErrorState((prev) => ({
					...prev,
					[name + "Error"]: value.length < 2 ? "Select type" : "",
				}));
				break;
			default:
				break;
		}
	};

	return (
		<Form className="form form--shipping" onSubmit={handleSubmit}>
			<div className="form-grid grid--2">
				<FormInput
					name="firstName"
					type="text"
					label={"First Name"}
					onChangeFunction={(e) => handleChange(e)}
					errorMessage={errorState.firstNameError}
				/>
				<FormInput
					name="lastName"
					type="text"
					label={"Last Name"}
					onChangeFunction={(e) => handleChange(e)}
					errorMessage={errorState.lastNameError}
				/>
				<FormInput
					name="phone"
					type="number"
					label={"Phone number"}
					onChangeFunction={(e) => handleChange(e)}
					errorMessage={errorState.phoneError}
				/>
				<FormInput
					name="email"
					type="email"
					label={"Email"}
					onChangeFunction={(e) => handleChange(e)}
					errorMessage={errorState.emailError}
				/>
			</div>
			<FormInput
				name="address"
				type="text"
				label={"Address"}
				onChangeFunction={(e) => handleChange(e)}
				errorMessage={errorState.addressError}
			/>
			<div className="form-grid grid--3">
				<FormInput
					name="city"
					type="text"
					label={"City"}
					onChangeFunction={(e) => handleChange(e)}
					errorMessage={errorState.cityError}
				/>
				<FormInput
					name="zipCode"
					type="text"
					label={"Zip Code"}
					onChangeFunction={(e) => handleChange(e)}
					errorMessage={errorState.zipCodeError}
				/>
				<label className="order--label">
					County
					<Select
						name="country"
						list={countries}
						onChange={(e) => handleChange(e)}
					/>
					<div className="error--message">{errorState.countryError}</div>
				</label>
			</div>
			<div className="shipping__method">
				<h2 className="">Shipping Methodes</h2>
				<div className="shipping__method--form">
					<label className="order--label order--label-radio">
						<input
							name="type"
							type="radio"
							value="Omniva"
							checked={shippingState.type === "Omniva"}
							onChange={(e) => handleChange(e)}
						/>
						Omniva
					</label>
					<label className="order--label order--label-radio">
						<input
							name="type"
							type="radio"
							value="DPD"
							checked={shippingState.type === "DPD"}
							onChange={(e) => handleChange(e)}
						/>
						DPD
						<div className="error--message">{errorState.typeError}</div>
					</label>
				</div>
			</div>
			<input type="submit" value="Submit" className="btn btn--black" />
		</Form>
	);
}

export { FormShipping };
