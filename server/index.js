process.env.NODE_CONFIG_DIR = "./server/config";
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");
const productRoute = require("./routes/productRoute");
const connectDB = require("./config/db");
const data = require("./data.json");

const PORT = process.env.PORT || 5000;

connectDB();

app.use(bodyParser.json());
app.use(express.static("public"));
app.use("/api/admin", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
// app.get("/api/products", (req, res) => res.send(data));

app.get("/api/products/:id", (req, res) => {
	const productId = req.params.id;
	const product = data.find((x) => x.id == productId);
	if (product) {
		res.send(product);
	} else {
		console.log(error);
	}
});

app.listen(PORT, () => {
	console.log(`Sever run at port ${PORT}`);
});
