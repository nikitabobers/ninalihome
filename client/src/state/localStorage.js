const loadState = () => {
	try {
		const state = localStorage.getItem("state");
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
		let items = [];

		const itemFromLS = localStorage.getItem("state");

		if (itemFromLS) {
			console.log("ss");

			// items = JSON.parse(itemFromLS);
			// items.push(JSON.parse(itemFromLS));
			const obj = { id: 1 };
			console.log("xxxxxxxxx");
			items.push(JSON.parse(obj));
		}

		items.push(JSON.stringify(state));

		localStorage.setItem("state", items);
	} catch (err) {
		console.log(err);
		return undefined;
	}
};

export { loadState, saveState };
