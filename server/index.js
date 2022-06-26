const express = require("express");
const mongoose = require("mongoose");
const getAllUsers = require("./controllers/User.js");
const userRouter = require("./routes/user");
const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb+srv://sangnv:1234@cluster0.ft9rone.mongodb.net/football_database?retryWrites=true&w=majority')
        console.log("Connected to MongoDB database");
    }catch(message){
        console.log(error.message);
        process.exit(1);
    }
}
connectDB();
//connect to database

const app = express();
app.listen('3001',(req,res)=>{
    console.log("Server is running on port 3001")
})

app.get('/',(req,res)=>{
    console.log("Home page");
    res.send("Home");
})

app.use('/api/', userRouter);