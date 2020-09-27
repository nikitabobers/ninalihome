import React from "react";
import { Button } from "../../layout/button/Button";
import { Link } from "react-router-dom";
import "./pageNotFound.css";

const PageNotFound = () => {
    return (
        <div className="container">
            <div className="pageNotFound">
                <div className="pageNotFound__title">
                    <h2>We are sorry,</h2>
                    <p>but the page you were looking for can't be found</p>
                </div>
                <div className="pageNotFound__image"></div>
                <Button buttonStyle="btn--black">
                    <Link to="/">Home Page</Link>
                </Button>
            </div>
        </div>
    );
};

export default PageNotFound;
