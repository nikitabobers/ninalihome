import React from "react";
import "./loader.css";

const checkLoading = (loading) => {
	if (loading) {
		return <Loader />;
	}
};

const Loader = () => {
	return (
		<div className="container--loading">
			<div className="lds-default">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export { Loader, checkLoading };
