const mongoose = require("mongoose");
const config = require("config");
const db = process.env.MONGODB_URI || config.get("mongoURI");

const connectDB = async () => {
	try {
		mongoose.connect(db, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
		});
		console.log("Mongoose connected");
	} catch (err) {
		console.error(err.message);
	}
};

module.exports = connectDB;
