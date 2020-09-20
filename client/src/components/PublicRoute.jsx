import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ component, ...rest }) => {
    return <Route component={component} {...rest} />;
};

export { PublicRoute };
