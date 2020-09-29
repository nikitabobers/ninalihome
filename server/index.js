process.env.NODE_CONFIG_DIR = "./server/config";
// process.env.NODE_ENV = "../client/build";
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const app = express();
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");
const productRoute = require("./routes/productRoute");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

connectDB();

app.use(bodyParser.json());
// app.use(express.static("public"));
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);

// app.use(express.static("../client/build"));
app.use(express.static(path.join(__dirname, "/../client/build")));
app.get("*", (req, res) => {
	res.sendFile(path.join(`${__dirname}/../client/build/index.html`));
});

app.listen(PORT, () => {
	console.log(`Sever run at port ${PORT}`);
});
