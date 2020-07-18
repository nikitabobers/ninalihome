import React from "react";
import { Button } from "../../../../layout/button/Button";
import "./homeSection4.css";

const HomeSection4 = () => {
	return (
		<div className="section__four">
			<div className="section__four--grid container">
				<div className="section__four-item">
					<div className="section__four--text">
						<Button buttonStyle="btn-shop">Shop now</Button>
					</div>
				</div>
				<div className="section__four-item">
					<div className="section__four--text">
						<Button buttonStyle="btn-shop">Shop now</Button>
					</div>
				</div>
				<div className="section__four-item">
					<div className="section__four--text">
						<Button buttonStyle="btn-shop">Shop now</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeSection4;
