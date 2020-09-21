import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../../../../actions/adminActions";
import "./login.css";

function Login() {
    const dispatch = useDispatch();

    const initialState = {
        name: null,
        password: null,
    };

    const [user, setUser] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signIn(user));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="container">
            <div className="login--section">
                <form
                    onSubmit={handleSubmit}
                    className="form--login form-section"
                >
                    <label className="form--label">
                        Login
                        <input
                            type="text"
                            name="name"
                            onChange={(e) => handleChange(e)}
                        />
                    </label>
                    <label className="form--label">
                        Password
                        <input
                            type="text"
                            name="password"
                            onChange={(e) => handleChange(e)}
                        />
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
