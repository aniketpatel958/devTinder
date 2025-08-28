const express = require ('express');
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");


app.post('/signup', async(req,res)=>{
    const userobj = {
        firstName : "Aniket",
        lastName : "Patel",
        emailId:"avonplus958@gmail.com",
        password:"12345"
    }
    
    //creating the new instance of te User Model
    const user = new User(userobj);
    try {
        await user.save()
    res.send("User signed up successfully")
    }
    catch(err){
        res.status(400).send("error");
        
    }
})


connectDB()
.then(()=>{
  console.log("Database connection successfully");
  app.listen(7777, ()=>{
    console.log("server is running on port 7777");
    
})
})
.catch((err)=>{
    console.error("Database connection failed");

});
