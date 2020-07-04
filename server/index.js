const express = require("express");
// process.env.NODE_CONFIG_DIR = "./server/config";
// const connectDB = require("./config/db");
const data = require("./data.json");
const app = express();

const PORT = process.env.PORT || 5000;

// connectDB();

app.use(express.static("public"));

app.get("/api/products", (req, res) => res.send(data));

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
