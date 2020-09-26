import React from "react";
import "./select.css";

const placeholder = (show) => {
	if (show) {
		return <option defaultValue="select">Select category</option>;
	}
};

function Select({ list, name, onChange, selectStyle, selected, show }) {
	return (
		<select
			className={`select select--grey ${selectStyle ? selectStyle : ""}`}
			onChange={onChange}
			name={name}
			value={selected}
		>
			{placeholder(show)}
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
