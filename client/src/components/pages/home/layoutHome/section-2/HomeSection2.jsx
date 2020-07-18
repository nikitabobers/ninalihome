import React from "react";
import "./homeSection2.css";
import { Button } from "../../../../layout/button/Button";

const HomeSection2 = () => {
	return (
		<div className="section section__two ">
			<div className="section--flex container">
				<div className="section__two--grid">
					<div className="grid__item"></div>
					<div className="grid__item"></div>
					<div className="grid__item"></div>
				</div>
				<div className="section__two--text">
					<h2 className="section__title">Accessories for home</h2>
					<Button buttonStyle="btn-shop">Shop now</Button>
				</div>
			</div>
		</div>
	);
};

export default HomeSection2;
