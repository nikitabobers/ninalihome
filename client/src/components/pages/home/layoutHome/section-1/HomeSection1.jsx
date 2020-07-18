import React from "react";
import "./homeSection1.css";
import { Button } from "../../../../layout/button/Button";

const HomeSection1 = () => {
	return (
		<div className="section section__one">
			<div className="section--flex container">
				<div className="section__one--img">
					<img src={require("./bag.jpg")} alt="bag" />
				</div>
				<div className="section__one--text">
					<h2 className="section__title">Summer bag</h2>
					<p>Stylish everyday bag for summer</p>
					<Button buttonStyle="btn-shop">Shop now</Button>
				</div>
			</div>
		</div>
	);
};

export default HomeSection1;
