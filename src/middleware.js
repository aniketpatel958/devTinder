const adminAuth = (req,res,next)=>{
    console.log("Auth is getting checked");
    
    const token = "xyz"
    const isAuthorizedToken = token === "xyz";
    if(!isAuthorizedToken){
        res.status(401).send("Unothorized token")
    }
    else{
        next();
    }

};
const userAuth = (req,res,next)=>{
    console.log("Auth is getting checked");
    
    const token = "xy"
    const isAuthorizedToken = token === "xy";
    if(!isAuthorizedToken){
        res.status(401).send("Unothorized token")
    }
    else{
        next();
    }

};

module.exports = {
adminAuth,
userAuth

}