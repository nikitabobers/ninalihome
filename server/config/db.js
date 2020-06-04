const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log("Mongoose connected");
  } catch (err) {
    console.log("aaa");
    console.log(err.message);
  }
};

module.exports = connectDB;
