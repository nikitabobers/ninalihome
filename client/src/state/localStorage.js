const localStorageItems = JSON.parse(localStorage.getItem("cartItems"));

let items = localStorageItems !== null ? localStorageItems : [];

const loadLC = () => {
	try {
		if (localStorageItems === null) {
			return undefined;
		}
		console.log(localStorageItems);
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
		// return { ...items, items: items.filter((item) => item.id !== itemID) };
	} catch (err) {
		console.log(err);
	}
};

export { loadLC, saveState, removeState };
