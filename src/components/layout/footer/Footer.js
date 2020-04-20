import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__grid">
                    <div className="footer__item">
                        <h4 className="footer__title">Get In Touch</h4>
                        <p>Contact Us if you are having some issues or questions:</p>
                        <p className="footer__contact">
                            <Link to="/contact">contact@ninalihome.com</Link>
                        </p>
                    </div>
                    <div className="footer__item">
                        <h4 className="footer__title">Follow Us</h4>
                        <ul className="footer__list">
                            <li className="footer__list--social">
                                <Link to="/contact">
                                    <i className="fab fa-instagram"></i>
                                    <p>Instagram</p>
                                </Link>
                            </li>
                            <li className="footer__list--social">
                                <Link to="/contact">
                                    <i className="fab fa-facebook-square"></i>
                                    <p>Facebook</p>
                                </Link>
                            </li>
                            <li className="footer__list--social">
                                <Link to="/contact">
                                    <i className="fab fa-pinterest-square"></i>
                                    <p>Pinterest</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__item">
                        <h4 className="footer__title">Information</h4>
                        <ul className="footer__list">
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link to="/contact">Affiliate Program</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__item">
                        <h4 className="footer__title">Customer Service</h4>
                        <ul className="footer__list">
                            <li>
                                <Link to="/about">Help</Link>
                            </li>
                            <li>
                                <Link to="/about">Shipping information</Link>
                            </li>
                            <li>
                                <Link to="/about">Return Policy</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="footer__bottom">
                    <small>{String.fromCharCode(169)} 2020. All rights reserved.</small>
                </div>
            </div>
        </div>
    );
};

export default Footer;
