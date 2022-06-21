const { application } = require("express");
const express = require("express");
const mongoose = require("mongoose");

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
app.listen('3000',(req,res)=>{
    console.log("Server is running on port 3000")
})

app.get('/',(req,res)=>{
    console.log("Home page");
    res.send("Home");
})