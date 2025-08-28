const express = require ('express');
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());


app.post('/signup', async(req,res)=>{
    
    //creating the new instance of te User Model
    const user = new User(req.body); 
    try {
        await user.save()
    res.send("User signed up successfully")
    }
    catch(err){
        res.status(400).send("error");
        
    }
})

//get user by emailId
app.get('/user', async(req,res)=>{
    const userEmail = req.body.emailId;
    try{
        if(!userEmail){
            res.status(400).send("something went wrong");
        }else{
             const users = await  User.find({emailId:userEmail});
              res.send(users)
        }
}catch(err){
    res.status(400).send("something went wrong");
}
    })

//Feed API -- GET /feed -get all the data from the user
app.get('/feed',async(req,res)=>{

    try {

        const users = await User.find({});
        res.send(users);
        
    } catch (err) {
        res.status(400).send("something went wrong");
    }

});







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
