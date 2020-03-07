var mongoose = require("mongoose");

const ndviSchema=new mongoose.Schema({
    date:Date,
    fid:{
        
        type:Number,
        required:true
    },
    value:String

    
})