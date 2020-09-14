import React from "react";

const strToUpperCase = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
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
