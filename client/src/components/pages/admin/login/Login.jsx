import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signIn } from "../../../../actions/adminActions";
import "./login.css";

function Login(props) {
    const dispatch = useDispatch();
    const admin = useSelector((state) => state.admin);

    const { adminUser, error } = admin;

    const initialState = {
        name: null,
        password: null,
    };

    const [user, setUser] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signIn(user));
    };

    useEffect(() => {
        if (adminUser) {
            props.history.push("/admin/panel");
        }
    }, [adminUser]);

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
                    <div className="error--message">{error}</div>
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
