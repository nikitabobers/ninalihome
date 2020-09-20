const mongoose = require("mongoose");

const prodctSchema = new mongoose.Schema({
    name: { type: String, required: true },
    categories: { type: String, required: true },
    color: { type: [String], required: true },
    images: { type: [String], required: true },
    description: { type: String, required: true },
    price: { type: String, default: 0, required: true },
    materials: { type: [String], required: false },
    dimensions: { type: [String], required: false },
    sizes: { type: [String], required: true },
    stock: { type: Boolean, default: 0, required: true },
    time: { type: String, required: false },
});

const Product = mongoose.model("product", prodctSchema);

module.exports = Product;
