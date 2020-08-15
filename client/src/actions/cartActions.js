import {
	CART_ADD_ITEM,
	CART_DELETE_ITEM,
	CART_COUNT_TOTAL_PRICE,
} from "../constants/cartConstants";
import { saveState, removeState } from "../state/localStorage";

const addToCart = (productItem) => async (dispatch) => {
	try {
		dispatch({
			type: CART_ADD_ITEM,
			payload: productItem,
		});

		saveState(productItem);
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

export { addToCart, removeItemFromCart, countTotalPrice };
