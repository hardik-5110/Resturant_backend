const mongoose = require('mongoose');

// schema 
const resturantSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Resturant title is required']
    },
    imageUrl:{
        type:String,
    },
    foods:{
        type:Array,
    },
    time:{
        type:String,
    },
    pickup:{
        type:Boolean,
        required:true

    },
    delivery:{
        type:Boolean,
        default:true
    },
    isOpen:{
        type:Boolean,
        default:true
    },
    logUrl:{
        type:String,
    },
    rating:{
        type:Number,
        default:1,
        min:1,
        max:5
    },
    ratingCount:{
        type:String
    },
    code:{
        type:String,
    },
    coords:{
        id:{type:String},
        latitude:{type:String},
        latitudeDelta:{type:String},
        longitude:{type:String},
        longitudeDelta:{type:String},
        address:{type:String},
        title:{type:String} 
    }
},{timestamps:true});



module.exports = mongoose.model('Resturant', resturantSchema);