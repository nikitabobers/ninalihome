import React from "react";
import ButtonShop from "../../../../layout/button/ButtonShop";

import "./homeSection3.css";

const HomeSection3 = () => {
	return (
		<div className="section section__three">
			<div className="section__three--grid container">
				<div className="section__three-item">
					<div className="section__three--text">
						<ButtonShop path="/shop" />
					</div>
				</div>
				<div className="section__three-item">
					<div className="section__three--text">
						<ButtonShop path="/shop" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeSection3;
