import { ORDER_ADD_SHIPPING } from "../constants/orderConstants";

const orderAdd = (shippingInfo) => async (dispatch) => {
	try {
		dispatch({
			type: ORDER_ADD_SHIPPING,
			payload: shippingInfo,
		});
	} catch (error) {
		console.log(error);
	}
};

export { orderAdd };
