const mongoose = require('mongoose')
const validator = require('validator');

const userSchema = new mongoose.Schema({
    firstName:{
        type : String,
        required:true,
        minLength : 4,
        maxLength: 20,
    },

    lastName:{
        type : String,
        required:true,
    },

    emailId:{
        type : String,
        required:true,
        unique:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error ("invalid Email:"+value);
            }
        }
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