const localStorageItems = JSON.parse(localStorage.getItem("cartItems"));

let items = localStorageItems !== null ? localStorageItems : [];

const loadLC = () => {
	try {
		if (localStorageItems === null) {
			return undefined;
		}
		return localStorageItems;
	} catch (err) {
		return undefined;
	}
};

const saveState = (state) => {
	try {
		items.push(state);
		localStorage.setItem("cartItems", JSON.stringify(items));
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

		// remove selected element from ITEMS array
		localStorage.setItem("cartItems", JSON.stringify(item));

		// add new ITEMS array to LC
		localStorage.setItem("cartItems", JSON.stringify(items));

		return newItem;
	} catch (err) {
		console.log(err);
	}
};

export { loadLC, saveState, removeState, changeQty };
