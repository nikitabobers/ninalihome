import React from "react";
import "./contact.css";

const Contact = () => {
	return (
		<div className="container">
			<div className="contact--section">
				<h1>Contact Us</h1>
				<form className="contact--cart">
					<label className="contact--label">
						Name
						<input type="text" placeholder="First name" />
					</label>
					<label className="contact--label">
						Email Address
						<input type="email" placeholder="name@email.com" />
					</label>
					<label className="contact--label">
						Message subject
						<input type="text" placeholder="Subject" />
					</label>
					<label className="contact--label">
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
