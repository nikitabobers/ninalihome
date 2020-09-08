import React from "react";

function OrderShippingItem({ label, value }) {
	return (
		<div className="order__shipping--item">
			<p>{label}</p>
			<span>{value}</span>
		</div>
	);
}

export { OrderShippingItem };
