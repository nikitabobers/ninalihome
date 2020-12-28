require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");
const productRoute = require("./routes/productRoute");

const db = process.env.MONGODB_URI;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use(bodyParser.json());
app.use(express.static("public"));
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use(express.static("./client/build"));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "./client/build/index.html"));
});

module.exports = app;

// "dev": "concurrently \"npm run server\" \"npm run client\"",
