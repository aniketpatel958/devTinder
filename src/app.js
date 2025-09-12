const express = require ("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");
const {validateSignUpData} = require("./utils/validation");
const bcrypt = require("bcrypt");

app.use(express.json());


app.post('/signup', async(req,res)=>{
   try {
    //VALIDATION OF DATA
    validateSignUpData(req);

    const {firstName,lastName,password,emailId} = req.body;

    //encryption
    const passwordHash =  await bcrypt.hash(password,10);
    console.log(passwordHash);
    
    
    //creating the new instance of te User Model
    
    const user = new User({
        firstName,
        lastName,
        password:passwordHash,
        emailId,
    }); 
    await user.save()
    res.send("User signed up successfully")
    }
    catch(err){
        res.status(400).send({error:err.message});
        
    }
})



app.post('/Login', async(req,res)=>{

    try {
        
   const {emailId,password} = req.body;

   const user = await User.findOne({emailId:emailId});
   if(!user){
    throw new Error("Invalid Credentials");
   }

   const isPasswordValid = await bcrypt.compare(password,user.password);

   if(isPasswordValid){
    res.send("Login Successfully!!!")
   }else{
    res.status(400).send("Invalid Credentials")
   }
    
}catch (err) {
        res.status(400).send({error:err.message})
    }
});

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

app.patch('/user/:userId',async(req,res)=>{
    const userId = req.params?.userId;
    const data = req.body;
    try {

        USER_ALLOWED_UPDATES = ["firstName","lastName","password","age","emailId"];
        const updates = Object.keys(data).every((k)=>
            USER_ALLOWED_UPDATES.includes(k)
        );
        if(!updates){
            throw new Error("invalid updates");
        }

        await User.findByIdAndUpdate({_id:userId} , data);
        runValidators : true,
        res.send("User updated successfully")
        
    } catch (err) {
        res.status(400).send("something went wrong")
    }
     
})

// app.patch('/user',async(req,res)=>{
//     const emailId = req.body.emailId;
//     const data = req.body;
//     try {
//         await User.findByIdAndUpdate({emailId:emailId}, data , {new:true});
//         res.send("User updated successfully");
//     } catch(err) {
        
//         res.status(401).send("problem");
        
//     }
// })


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
