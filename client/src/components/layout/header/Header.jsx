import React from "react";
import Navbar from "./navbar/Navbar";
import Profile from "./profile/Profile";
import { Link } from "react-router-dom";
import "./header.css";

const checkRoute = () => {
    const address = window.location.pathname;

    if (address.includes("admin")) {
        return null;
    } else {
        return (
            <div className="header">
                <div className="container">
                    <div className="header__bottom-window">
                        <Link to="/" className="header__logo">
                            ninalihome
                        </Link>
                        <Navbar />
                        <Profile />
                    </div>
                    <hr />
                </div>
            </div>
        );
    }
};

const Header = () => {
    return checkRoute();
};

export default Header;
