import React, { useState } from "react";
import "./login.css";

function Login() {
    return (
        <div className="container">
            <div className="login--section">
                <form className="form--login form-section">
                    <label className="form--label">
                        Login
                        <input type="text" />
                    </label>
                    <label className="form--label">
                        Password
                        <input type="text" />
                    </label>
                    <input
                        type="submit"
                        className="btn btn--black"
                        value="Login"
                    />
                </form>
            </div>
        </div>
    );
}

export default Login;
