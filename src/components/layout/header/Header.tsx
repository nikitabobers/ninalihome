import React from "react";
import Navbar from "./navbar/Navbar";
import Profile from "./profile/Profile";
// import PanelTop from "./panelTop/PanelTop";
import PanelTop from "./panelTop/PanelTop";
import "./header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="header__top-window">{<PanelTop />}</div>
            <div className="header__bottom-window">
                <div className="header__logo">Ninali home</div>
                <Navbar />
                <Profile />
            </div>
        </div>
    );
};

export default Header;
