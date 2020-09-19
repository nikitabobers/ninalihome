const mongoose = require("mongoose");

const prodctSchema = new mongoose.Schema({
	name: { type: String, required: true },
	image: { type: String, required: true },
	price: { type: Number, default: 0, required: true },
	category: { type: String, required: true },
	countInStock: { type: Number, default: 0, required: true },
	description: { type: String, required: true },
});

const Product = mongoose.model("product", prodctSchema);

module.exports = Product;
