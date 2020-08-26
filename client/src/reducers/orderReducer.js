import { ORDER_ADD_SHIPPING } from "../constants/orderConstants";

const initialState = {
	cartItems: [],
	shipping: {},
};

const orderReducer = (state = initialState, action) => {
	switch (action.type) {
		case ORDER_ADD_SHIPPING:
			console.log(state);
			return { ...state, shipping: action.payload };
		default:
			return state;
	}
};

export { orderReducer };
