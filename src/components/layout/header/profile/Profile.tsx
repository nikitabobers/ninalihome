import React from "react";
import "./profile.css";
const Profile = () => {
    return (
        <div className="profile__menu">
            <div className="profile__item">
                <i className="far fa-user-circle fa-lg"></i>
            </div>
            <div className="profile__item">
                <i className="fas fa-shopping-bag fa-lg"></i>
            </div>
        </div>
    );
};

export default Profile;
