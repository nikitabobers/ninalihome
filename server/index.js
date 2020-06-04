const express = require("express");
// process.env.NODE_CONFIG_DIR = "./server/config";
// const connectDB = require("./config/db");
const data = require("../data.json");
const app = express();

const PORT = process.env.PORT || 5000;

// connectDB();

app.get("/api/products", (req, res) => res.send(data));

app.listen(PORT, () => {
  console.log(`Sever run at port ${PORT}`);
});
