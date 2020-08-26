import React from "react";
import "./select.css";

function Select({ list, value, onChange, style }) {
	return (
		<select className={`select select--grey ${style}`} onChange={onChange}>
			{list.map((item) => (
				<option key={item.value ? item.value : item} value={item.value}>
					{item.label ? item.label : item}
				</option>
			))}
		</select>
	);
}

export { Select };
