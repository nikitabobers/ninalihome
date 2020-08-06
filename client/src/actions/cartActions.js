import { CART_ADD_ITEM, CART_DELETE_ITEM } from "../constants/cartConstants";
import { saveState, removeState } from "../state/localStorage";

const addToCart = (productItem) => async (dispatch) => {
	try {
		dispatch({
			type: CART_ADD_ITEM,
			payload: {
				id: productItem.id,
				name: productItem.name,
				categories: productItem.categories,
				color: productItem.color,
				images: productItem.images,
				price: productItem.price,
				sizes: productItem.sizes,
				qty: 1,
			},
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

export { addToCart, removeItemFromCart };
