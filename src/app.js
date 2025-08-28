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

//DELETE API -- DELETE /user/:id - delete the user by id

app.delete('/user',async(req,res)=>{
    const userId = req.body.userId;
    try {

        const user = await User.findByIdAndDelete(userId);
        if(!user){
            res.status(400).send("user not found");
        }else{
            res.send("user deleted successfully");
    
        }
        
    } catch (error) {
        res.status(400).send("something went wrong")
    }

})


//update API -- PATCH /user/:id - update the user by id

app.patch('/user',async(req,res)=>{
     
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
