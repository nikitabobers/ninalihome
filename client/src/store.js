import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import {
	productListReducer,
	productDetailsReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducer";
import { loadItemsLC, loadShippinhLC } from "./state/localStorage";

const cartItems = loadItemsLC() || [];

const shipping = loadShippinhLC() || [];

const initialState = { cart: { cartItems, shipping } };

const reducer = combineReducers({
	productList: productListReducer,
	productDetails: productDetailsReducer,
	cart: cartReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducer,
	initialState,
	composeEnhancers(applyMiddleware(thunk))
);

export { store };
