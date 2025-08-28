const mongoose = require("mongoose");

const connectDB = async () =>{
    await mongoose.connect("mongodb+srv://avonplus958:2677657@cluster0.y6eip.mongodb.net/devTinder");
};

module.exports = connectDB;
