import React from "react";
import { Link } from "react-router-dom";
import "./homeSection1.css";

const HomeSectionOne = ({ list }) => {
	return (
		<div className="section section__one">
			<div className="section--flex container">
				<div className="section__one--img">
					<img src={require("./bag.webp")} alt="bag" />
				</div>
				<div className="section__one--text">
					<h2 className="section__title">Summer bag</h2>
					<p>Stylish everyday bag for summer</p>
					<Link to="/shop" className="btn btn--shop">
						Shop now
					</Link>
				</div>
			</div>
		</div>
	);
};

export { HomeSectionOne };
