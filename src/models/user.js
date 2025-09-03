const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName:{
        type : String,
        required:true,
    },

    lastName:{
        type : String,
        required:true,
    },

    emailId:{
        type : String,
        required:true,
        unique:true,
        lowercase:true
    },

    password:{
        type : String,
        required:true,
    },

    age:{
        type : Number
    },
    gender:{
        type : String,
        validate(value){
            if(!["male","Female","others"].includes(value)){
                throw new Error
            }
        }
    }
},

    {
        timestamps:true,
    });

const User = mongoose.model("User", userSchema);
module.exports = User;