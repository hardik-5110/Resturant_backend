const mongoose = require('mongoose');

// schema 
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,'user name is required']
    },
    email:{
        type:String,
        required:[true,'email is required']
    },
    password:{
        type:String,
        required:[true,'password is required']
    },
    phone:{
        type:String,
        required:[true,'phone number is required']
    },
    address:{
        type:Array,
    },
    usertype:{
        type:String,
        required:[true,'email is required'],
        default:'client',
        enum:['client','admin','vender','driver']
    },
    profile:{
        type:String,
        default:'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png'
    },
    answer:{
        type:String,
        required:[true, "Answer is required"],
    }

},{timestamps:true});

const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;