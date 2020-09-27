import React from "react";

const strToUpperCase = (string) => {
	return (
		// Set first letter to uppercase
		string.charAt(0).toUpperCase() +
		string
			.slice(1) // Get rest of the word (without first letter)
			.split(/(?=[A-Z])/) // Find if there is capital letter
			.join(" ") // Join in whole word
	);
};

function OrderShippingItem({ label, value }) {
	return (
		<div className="order__shipping--item">
			<p>{strToUpperCase(label)}:</p>
			<span>{value}</span>
		</div>
	);
}

export { OrderShippingItem };
