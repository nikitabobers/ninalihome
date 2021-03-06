import {
	CART_ADD_ITEM,
	CART_DELETE_ITEM,
	CART_COUNT_TOTAL_PRICE,
	CART_ADD_SHIPPING,
} from "../constants/cartConstants";
import {
	saveCartState,
	removeState,
	saveShippingState,
} from "../state/productLS";

const addToCart = (productItem) => async (dispatch) => {
	try {
		dispatch({
			type: CART_ADD_ITEM,
			payload: productItem,
		});

		saveCartState(productItem);
	} catch (error) {
		console.log(error);
	}
};
const removeItemFromCart = (productId) => async (dispatch) => {
	try {
		dispatch({
			type: CART_DELETE_ITEM,
			payload: productId,
		});

		removeState(productId);
	} catch (err) {
		console.log(err);
	}
};
const countTotalPrice = (total) => async (dispatch) => {
	try {
		dispatch({
			type: CART_COUNT_TOTAL_PRICE,
			payload: total,
		});
	} catch (err) {
		console.log(err);
	}
};
const addShipping = (shipping) => async (dispatch) => {
	try {
		dispatch({
			type: CART_ADD_SHIPPING,
			payload: shipping,
		});
		saveShippingState(shipping);
	} catch (err) {
		console.log(err);
	}
};

export { addToCart, removeItemFromCart, countTotalPrice, addShipping };
