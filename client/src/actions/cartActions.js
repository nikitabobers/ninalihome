import {
	CART_ADD_ITEM,
	CART_REQUEST,
	CART_DELETE_ITEM,
} from "../constants/cartConstants";
import axios from "axios";

const addToCart = (productItem) => async (dispatch) => {
	try {
		// dispatch({ type: CART_REQUEST });

		dispatch({
			type: CART_ADD_ITEM,
			payload: productItem,
		});

		console.log(productItem);
	} catch (error) {
		console.log(error);
	}
};

export { addToCart };
