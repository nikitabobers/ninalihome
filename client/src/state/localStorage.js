const loadState = () => {
	try {
		const state = localStorage.getItem("cartItems");
		if (state === null) {
			return undefined;
		}
		return JSON.parse(state);
	} catch (err) {
		return undefined;
	}
};

const saveState = (state) => {
	try {
		const itemFromLS = localStorage.getItem("cartItems");

		let items = JSON.parse(itemFromLS) || [];

		items.push(state);

		localStorage.setItem("cartItems", JSON.stringify(items));
	} catch (err) {
		console.log(err);
		return undefined;
	}
};

export { loadState, saveState };
