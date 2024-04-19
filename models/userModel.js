const mongoose = require('mongoose');

const userModel= new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"],
        minLength:[6,"name must be atleast 6 characters"],
        trim:true 
    },
    username:{
        type:String,
        unique:true,
        required:[true,"username is required"],
        minLength:[6,"name must be atleast 6 characters"],
        trim:true, 
    },

    email:{
        type:String,
        lowercase:true,
        required:[true,"email is required"],
        trim:true,
        match: [/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    gender:{
         type:String,
         enum:["male", "female","other"],
         required:[true,"Gender is required"],
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        minLength:[6,"Password must be atleast 6 characters"],
        maxLength:[15,"Password must be atleast 15characters"],
    },
   
});

const User=mongoose.model("user",userModel);
module.exports=User;