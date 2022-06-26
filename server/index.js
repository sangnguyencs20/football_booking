const mongoose = require("mongoose");
const connectDB = require("./db/connectDB");
require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};
start();
app
  .get("/", (req, res) => {
    res.send("Home");
  })
  .post("/", (req, res) => {
    res.send("Post home");
  });
