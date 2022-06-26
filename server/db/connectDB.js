const mongoose = require("mongoose");

const connectDB = (url) => {
  console.log("Connected to database successfully");
  return mongoose.connect(url);
};

module.exports = connectDB;
