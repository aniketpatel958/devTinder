const express = require ('express');

const app = express();

// app.use("/rishabh" , (req,res)=>{
//     res.send("hello  i m server")
// })
// app.use("/test" , (req,res)=>{
//     res.send("hi buudy");
    
// })

// app.listen(3000 , ()=>{
//     console.log("server is running successfully");
    
// }) 

app.get("/aniket" , (req,res)=>{
    res.send("name:aniket , password:1234")
})
app.use("/" , (req,res)=>{
    res.send("name:aniket , password:1234")
})
app.delete("/aniket" , (req,res)=>{
    res.send("sab khali hai")
})

app.post("/shivam" , (req,res)=>{
    res.send("hello shivam")
})
app.patch("/shivam" , (req,res)=>{
    res.send("hello shivam")
})


app.listen(5000, ()=>{
    console.log("this is good");
    
})