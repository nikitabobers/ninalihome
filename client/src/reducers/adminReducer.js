import {
	USER_SIGNIN,
	USER_REQUEST,
	USER_LOGOUT,
	USER_ITEM_ADD,
	USER_ITEM_DELETE,
	USER_ITEM_EDIT,
	USER_SIGNIN_FAIL,
	USER_LOADED,
} from "../constants/adminConstants";

const initialState = {
	loading: false,
	isAuthenticated: false,
	token: localStorage.getItem("token") || null,
	error: null,
};

const adminReducer = (state = initialState, action) => {
	switch (action.type) {
		case USER_LOADED:
			return { ...state, loading: false, isAuthenticated: true };
		case USER_REQUEST:
			return { ...state, loading: true };
		case USER_SIGNIN:
			localStorage.setItem("token", action.payload.token);
			return {
				...state,
				loading: false,
				isAuthenticated: true,
				token: action.payload,
				error: null,
			};
		case USER_SIGNIN_FAIL:
			return { ...state, loading: false, error: action.payload };
		case USER_LOGOUT:
			return {};
		default:
			return state;
	}
};

export { adminReducer };
