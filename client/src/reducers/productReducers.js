import {
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_LIST_FILTER,
} from "../constants/productConstants";

const productListReducer = (
	state = { products: [], filterProducts: [] },
	action
) => {
	switch (action.type) {
		case PRODUCT_LIST_REQUEST:
			return { loading: true, products: [] };
		case PRODUCT_LIST_SUCCESS:
			return { loading: false, products: action.payload };
		case PRODUCT_LIST_FILTER:
			return { ...state, loading: false, filterProducts: action.payload };
		default:
			return state;
	}
};

const productDetailsReducer = (state = { product: {} }, action) => {
	switch (action.type) {
		case PRODUCT_DETAILS_REQUEST:
			return { loading: true, product: {} };
		case PRODUCT_DETAILS_SUCCESS:
			return { loading: false, product: action.payload };
		default:
			return state;
	}
};

export { productDetailsReducer, productListReducer };
