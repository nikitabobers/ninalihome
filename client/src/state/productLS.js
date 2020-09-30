const localStorageItems = JSON.parse(localStorage.getItem("cartItems"));
const localStorageShipping = JSON.parse(localStorage.getItem("shippingInfo"));

let items = localStorageItems !== null ? localStorageItems : [];

const loadItemsLC = () => {
	try {
		if (localStorageItems === null) {
			return undefined;
		}
		return localStorageItems;
	} catch (err) {
		return undefined;
	}
};

const loadShippingLC = () => {
	try {
		if (localStorageShipping === null) {
			return undefined;
		}
		return localStorageShipping;
	} catch (err) {
		return undefined;
	}
};

const saveCartState = (state) => {
	try {
		items.push(state);
		localStorage.setItem("cartItems", JSON.stringify(items));
	} catch (err) {
		console.log(err);
		return undefined;
	}
};

const saveShippingState = (state) => {
	try {
		localStorage.setItem("shippingInfo", JSON.stringify(state));
	} catch (err) {
		console.log(err);
		return undefined;
	}
};

const removeState = (itemID) => {
	try {
		return localStorage.setItem(
			"cartItems",
			JSON.stringify(items.filter((item) => item.id !== itemID))
		);
	} catch (err) {
		console.log(err);
	}
};

const changeQty = (qty, id) => {
	try {
		const qtyObject = { qty: parseInt(qty) };

		const item = items.filter((product) => product.id === id);

		const newItem = Object.assign(item[0], qtyObject);

		// add new ITEMS array to LC
		localStorage.setItem("cartItems", JSON.stringify(items));

		return newItem;
	} catch (err) {
		console.log(err);
	}
};

export {
	loadItemsLC,
	loadShippingLC,
	saveCartState,
	saveShippingState,
	removeState,
	changeQty,
};
