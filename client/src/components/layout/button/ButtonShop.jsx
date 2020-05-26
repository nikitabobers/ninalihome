import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

const ButtonShop = ({ path }) => {
    return (
        <button className="btn btn-shop">
            <Link to={path}>Shop now</Link>
        </button>
    );
};

export default ButtonShop;
