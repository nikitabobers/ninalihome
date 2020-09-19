const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");
const Product = require("../models/ProductModel");

// @route   GET api/products
// @desc    Get all product list
// @access  Public

router.get("/", async (req, res) => {
	try {
		const products = await Product.find().sort({
			_id: -1,
		});
		res.json(products);
	} catch (err) {
		console.error(err);
		res.status(500).send("Server Error");
	}
});

// @route   GET api/products/:id
// @desc    Get a specific product
// @access  Public

router.get("/:id", async (req, res) => {
	try {
		const product = await Product.findOne({ _id: req.params.id });
		res.send(product);
	} catch (err) {
		res.status(404).send({ message: "Product Not Found." });
	}
});

// @route   PUT api/products/:id
// @desc    Update product
// @access  Private

router.put("/:id", auth, async (req, res) => {
	try {
		const {
			name,
			price,
			image,
			category,
			countInStock,
			description,
		} = req.body;

		let product = await Product.findById(req.params.id);

		if (!product) return res.status(404).json({ msg: "Product not found" });

		const updatedProduct = {};

		if (product) {
			updatedProduct.name = name;
			updatedProduct.price = price;
			updatedProduct.image = image;
			updatedProduct.category = category;
			updatedProduct.countInStock = countInStock;
			updatedProduct.description = description;
		}

		product = await Product.findByIdAndUpdate(
			req.params.id,
			{ $set: updatedProduct },
			{ new: true }
		);

		return res.json(product);
	} catch (err) {
		return res.status(500).send({ message: " Error in Updating Product." });
	}
});

// @route   DELETE api/products/:id
// @desc    Delete product
// @access  Private

router.delete("/:id", auth, async (req, res) => {
	try {
		const deletedProduct = await Product.findById(req.params.id);
		await deletedProduct.remove();
		// await deletedProduct.findByIdAndRemove();
		res.send({ message: "Product Deleted" });
	} catch (err) {
		console.error(err);
		res.status(500).send("Server Error");
	}
});

// @route   POST api/products
// @desc    Create a new product
// @access  Private

router.post(
	"/",
	[auth, [check("name", "Name is required").not().isEmpty()]],
	async (req, res) => {
		const errors = validationResult(req);

		if (!errors.isEmpty())
			return res.status(400).json({ errors: errors.array() });

		try {
			const {
				name,
				price,
				image,
				category,
				countInStock,
				description,
			} = req.body;

			const product = new Product({
				name,
				price,
				image,
				category,
				countInStock,
				description,
			});

			const newProduct = await product.save();

			return res
				.status(201)
				.send({ message: "New Product Created", data: newProduct });
		} catch (err) {
			console.error(err.message);
		}
	}
);

module.exports = router;
