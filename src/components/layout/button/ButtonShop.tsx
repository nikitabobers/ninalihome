import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

type Address = {
    path: string;
};

const ButtonShop = ({ path }: Address) => {
    return (
        <button className="btn btn-shop">
            <Link to={path}>Shop now</Link>
        </button>
    );
};

export default ButtonShop;
