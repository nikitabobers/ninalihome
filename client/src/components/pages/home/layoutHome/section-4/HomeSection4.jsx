import React from "react";
import { Link } from "react-router-dom";
import "./homeSection4.css";

const HomeSectionFour = ({ list }) => {
	return (
		<div className="section__four">
			<div className="section__four--grid container">
				{list.map((item) => {
					return (
						<div key={item._id} className="section__four-item">
							<img src={item.images[0]} alt={item.name} />
							<div className="section__four--text">
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

export { HomeSectionFour };
