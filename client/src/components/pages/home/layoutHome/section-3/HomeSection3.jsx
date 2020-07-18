import React from "react";
import { Button } from "../../../../layout/button/Button";

import "./homeSection3.css";

const HomeSection3 = () => {
	return (
		<div className="section section__three">
			<div className="section__three--grid container">
				<div className="section__three-item">
					<div className="section__three--text">
						<Button buttonStyle="btn-shop">Shop now</Button>
					</div>
				</div>
				<div className="section__three-item">
					<div className="section__three--text">
						<Button buttonStyle="btn-shop">Shop now</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeSection3;
