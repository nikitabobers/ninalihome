import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const admin = useSelector((state) => state.admin);
    const { adminUser } = admin;
    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route
            {...rest}
            render={(props) =>
                adminUser ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/admin/login" />
                )
            }
        />
    );
};

export { PrivateRoute };
