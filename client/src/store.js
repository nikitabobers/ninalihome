import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import {
	productListReducer,
	productDetailsReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducer";
import { adminReducer } from "./reducers/adminReducer";
import { loadItemsLC, loadShippingLC } from "./state/productLS";
import { authToken } from "./utils/authToken";

if (localStorage.token) {
	authToken(localStorage.token);
}

const cartItems = loadItemsLC() || [];

const shipping = loadShippingLC() || [];

const initialState = { cart: { cartItems, shipping } };

const reducer = combineReducers({
	productList: productListReducer,
	productDetails: productDetailsReducer,
	cart: cartReducer,
	admin: adminReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducer,
	initialState,
	composeEnhancers(applyMiddleware(thunk))
);

export { store };
