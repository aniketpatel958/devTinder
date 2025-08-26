const express = require ('express');
const { adminAuth, userAuth } = require('./middleware');

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

// app.get("/aniket/userid", (req,res)=>{
//      console.log(req.query);
//     res.send("name:aniket , password:1234")

    
   
    
// })
// app.use("/" , (req,res)=>{
//     res.send("name:aniket , password:1234")
// })
// app.delete("/aniket" , (req,res)=>{
//     res.send("sab khali hai")
// })

// app.post("/shivam" , (req,res)=>{
//     res.send("hello shivam")
// })
// app.patch("/shivam" , (req,res)=>{
//     res.send("hello shivam")
// })


// app.get("/user", 
//     [(req,res,next)=>{
//         console.log("1 royte");
//       next();  
//     //res.send("routet1")
    
// },
//     (req,res,next)=>{
//         console.log("2 royte");
//         next();
//     //res.send("routet2")
    
// }],
//     (req,res,next)=>{
//         console.log("3 royte");
//     res.send("routet3")
//     next();
// },
//     (req,res,next)=>{
//         console.log("4 royte");
//     //res.send("routet4")
//     next();
// },
//     (req,res,next)=>{
//         console.log("5 royte");
//     //res.send("routet5")
//     next();
// }
// )


// app.use("/admin",adminAuth);
// app.use("/user",userAuth);


// app.get("/admin/getAllData",(req,res,next)=>{
//     res.send("all data sent");
// })
// app.get("/admin/deleteAllData",(req,res,next)=>{
//     res.send(" delete all data");
// })
// app.get("/user/deleteAllData",(req,res,next)=>{
//     res.send(" delete all the user data");
// })

// ERROR HANDLING MIDDLEWARE
app.use("/", (err,req,res,next)=>{
    if(err){
        res.status(501).send("bhaiya koi dikkat hai")
    }
})


app.get("/getUserData", (req,res)=>{
    try{
        throw new Error("dnfifi");
        res.send("all data sent");
    }
    catch(err){
      res.status(500).send("some error occured");
    }

})


app.use("/", (err,req,res,next)=>{
    if(err){
        res.status(501).send("bhaiya koi dikkat hai")
    }
})
app.listen(5000, ()=>{
    console.log("this is good");
    
})