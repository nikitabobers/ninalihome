import axios from "axios";
import {
	USER_SIGNIN,
	USER_LOGOUT,
	USER_LOADED,
	USER_ITEM_ADD,
	USER_ITEM_DELETE,
	USER_ITEM_EDIT,
	USER_SIGNIN_FAIL,
} from "../constants/adminConstants";
import { authToken } from "../utils/authToken";

const loadUser = () => async (dispatch) => {
	// Load token into request headers
	if (localStorage.token) {
		authToken(localStorage.token);
	}

	try {
		const res = await axios.get("/api/auth");
		dispatch({
			type: USER_LOADED,
			payload: res.data,
		});
	} catch (err) {
		console.log(err);
		dispatch({ type: USER_SIGNIN_FAIL });
	}
};

const signIn = (formData) => async (dispatch) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};

	try {
		const response = await axios.post("/api/auth", formData, config);
		dispatch({ type: USER_SIGNIN, payload: response.data });

		loadUser();
	} catch (error) {
		dispatch({
			type: USER_SIGNIN_FAIL,
			payload: "Wrong username or password",
		});
		console.log(error);
	}
};

export { signIn, loadUser };
