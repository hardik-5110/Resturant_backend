const mongoose = require('mongoose');

// schema 
const foodSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Food title is required']
    },
    description:{
        type:String,
        required:[true,'Food description is required']
    },
    price:{
        type:Number,
        required:[true,"food price is required"],
    },
    imageUrl:{
        type:String,
        default:"https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg",
    },
    foodTags:{
        type:String,
    },
    category:{
        type:String,
    },
    code:{
        type:String,
    },
    isAvailable:{
        type:Boolean,
        default:true,
    },
    resturant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Resturant',
    },
    rating:{
        type:Number,
        default:1,
        min:1,
        max:5
    },
    ratingCount:{
        type:String
    }
},{timestamps:true});



module.exports = mongoose.model('Food', foodSchema);