import React from "react";
import "./pageNotFound.css";
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className="container">
            <div className="pageNotFound">
                <div className="pageNotFound__title">
                    <h2>We are sorry,</h2>
                    <p>but the page you were looking for can't be found</p>
                </div>
                <div className="pageNotFound__image"></div>
                <button className="btn__pageNotFound btn">
                    <Link to="/">Home Page</Link>
                </button>
            </div>
        </div>
    );
};

export default PageNotFound;
