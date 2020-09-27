import React from "react";
import { Link } from "react-router-dom";
import "./homeSection3.css";

const HomeSectionThree = ({ list }) => {
	return (
		<div className="section section__three">
			<div className="section__three--grid container">
				{list.map((item) => {
					return (
						<div key={item._id} className="section__three-item">
							<img src={item.images[0]} alt={item.name} />
							<div className="section__three--text">
								<Link to={`/product/${item._id}`} className="btn btn--shop">
									Shop now
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export { HomeSectionThree };
