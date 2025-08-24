const express = require ('express');

const app = express();

app.use("/rishabh" , (req,res)=>{
    res.send("hello  i m server")
})
app.use("/test" , (req,res)=>{
    res.send("hi buudy");
    
})

app.listen(3000 , ()=>{
    console.log("server is running successfully");
    
}) 



app.use("/aniket" , (req,res)=>{
    res.send("hello bhai")
})
app.use("/shivam" , (req,res)=>{
    res.send("hello shivam")
})


app.listen(5000, ()=>{
    console.log("this is good");
    
})