import React from "react";
import "./select.css";

function Select({ list, name, onChange, selectStyle }) {
	return (
		<select
			className={`select select--grey ${selectStyle ? selectStyle : ""}`}
			onChange={onChange}
			name={name}
		>
			{list.map((item) => (
				<option
					key={item.value ? item.value : item}
					name={item}
					value={item.value}
				>
					{item.label ? item.label : item}
				</option>
			))}
		</select>
	);
}

export { Select };
