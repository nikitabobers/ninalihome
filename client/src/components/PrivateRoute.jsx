import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadUser } from "../actions/adminActions";

const PrivateRoute = ({ component: Component, ...rest }) => {
	const admin = useSelector((state) => state.admin);
	const { isAuthenticated } = admin;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadUser());
		// eslint-disable-next-line
	}, []);

	// Show the component only when the user is logged in
	// Otherwise, redirect the user to /login page
	return (
		<Route
			{...rest}
			render={(props) =>
				isAuthenticated ? (
					<Component {...props} />
				) : (
					<Redirect to="/admin/login" />
				)
			}
		/>
	);
};

export { PrivateRoute };
