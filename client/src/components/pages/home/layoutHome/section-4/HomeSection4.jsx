import React from "react";
import { Link } from "react-router-dom";
import "./homeSection4.css";

const HomeSection4 = ({ list }) => {
	return (
		<div className="section__four">
			<div className="section__four--grid container">
				{list.map((item) => {
					return (
						<div key={item.id} className="section__four-item">
							<img src={item.images} alt={item.name} />
							<div className="section__four--text">
								<Link to={`/product/${item.id}`} className="btn btn--shop">
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

export default HomeSection4;
