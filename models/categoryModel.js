const mongoose = require('mongoose');

// schema 
const categorySchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Category title is required']
    },
    imageUrl:{
        type:String,
        default:"https://cdn.logojoy.com/wp-content/uploads/2018/05/01105857/1553-768x591.png"
    }
},{timestamps:true});



module.exports = mongoose.model('Category', categorySchema);