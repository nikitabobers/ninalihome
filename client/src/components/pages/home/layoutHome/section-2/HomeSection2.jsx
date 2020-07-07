import React from "react";
import "./homeSection2.css";
import ButtonShop from "../../../../layout/button/ButtonShop";

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
					<p></p>
					<ButtonShop path="/shop" />
				</div>
			</div>
		</div>
	);
};

export default HomeSection2;
