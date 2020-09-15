import {
	CART_ADD_ITEM,
	CART_DELETE_ITEM,
	CART_COUNT_TOTAL_PRICE,
	CART_ADD_SHIPPING,
} from "../constants/cartConstants";

const initialState = {
	cartItems: [],
	total: null,
	shipping: {},
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case CART_ADD_ITEM:
			return { ...state, cartItems: [...state.cartItems, action.payload] };
		case CART_DELETE_ITEM:
			return {
				...state,
				cartItems: state.cartItems.filter((item) => item.id !== action.payload),
			};
		case CART_COUNT_TOTAL_PRICE:
			const prices = state.cartItems.map((item) => item.price);

			const qty = state.cartItems.map((item) => item.qty);

			let itemResult = [];

			for (let i = 0; i < prices.length; i++) {
				itemResult.push(prices[i] * qty[i]);
			}

			const sum = itemResult.reduce((acc, val) => acc + val);

			return {
				...state,
				total: sum,
			};
		case CART_ADD_SHIPPING:
			return { ...state, shipping: action.payload };
		default:
			return state;
	}
};

export { cartReducer };
