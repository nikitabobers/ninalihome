import React from "react";
import { Link } from "react-router-dom";
import "./homeSection2.css";

const HomeSection2 = ({ list }) => {
	return (
		<div className="section section__two ">
			<div className="section--flex container">
				<div className="section__two--grid">
					{list.map((item) => {
						return (
							<div key={item.id} className="grid__item">
								<img src={item.images[0]} />
							</div>
						);
					})}
				</div>
				<div className="section__two--text">
					<h2 className="section__title">Accessories for home</h2>
					<Link to="/shop" className="btn btn--shop">
						Shop now
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HomeSection2;
