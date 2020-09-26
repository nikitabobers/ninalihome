import React from "react";
import "./contact.css";

const Contact = () => {
	return (
		<div className="container">
			<div className="contact--section">
				<h1>Contact Us</h1>
				<form className="contact--cart form-section">
					<label className="form--label">
						Name
						<input type="text" placeholder="First name" />
					</label>
					<label className="form--label">
						Email Address
						<input type="email" placeholder="name@email.com" />
					</label>
					<label className="form--label">
						Message subject
						<input type="text" placeholder="Subject" />
					</label>
					<label className="form--label">
						Message
						<textarea placeholder="Your message" />
					</label>
					<input className="btn btn--black" type="submit" value="Submit" />
				</form>
			</div>
		</div>
	);
};

export default Contact;
