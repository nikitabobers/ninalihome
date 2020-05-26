import React from "react";
import "./profile.css";
import { Link } from "react-router-dom";

const Profile = () => {
    return (
        <div className="profile__menu">
            {/* <div className="profile__item">
                 <i className="far fa-user-circle fa-lg"></i>
             </div> */}
            <div className="profile__item">
                <Link to="/cart">
                    <i className="fas fa-shopping-bag fa-lg"></i>
                </Link>
            </div>
        </div>
    );
};

export default Profile;
