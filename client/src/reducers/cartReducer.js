import {
	CART_ADD_ITEM,
	CART_REQUEST,
	CART_DELETE_ITEM,
} from "../constants/cartConstants";

const initialState = {
	cartItems: [],
	quantityItems: {},
	loading: true,
};

const addItems = (state = initialState.cartItems, action) => {
	switch (action.type) {
		case CART_ADD_ITEM:
			return [...state, action.payload];
		default:
			return state;
	}
};

const addItemQuantity = (state = initialState.quantityItems, action) => {
	switch (action.type) {
		case CART_ADD_ITEM:
			return { ...state };
		default:
			return state;
	}
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case CART_REQUEST:
			return initialState;
		default:
			return {
				cartItems: addItems(state.cartItems, action),
				quantityItems: addItemQuantity(state.quantityItems, action),
			};
	}
};

export { cartReducer };
