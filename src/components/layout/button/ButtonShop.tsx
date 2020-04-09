import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

type Address = {
    address: string;
};

const ButtonShop = ({ address }: Address) => {
    return (
        <button className="btn btn-shop">
            <Link to={address}>Shop now</Link>
        </button>
    );
};

export default ButtonShop;
