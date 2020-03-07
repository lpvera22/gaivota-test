/* eslint-disable indent */
/*jshint esversion: 8 */
var mongoose = require("mongoose");






const FarmSchema= new mongoose.Schema({
    farm_id:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },

    geometry: {
        type: {
          type: String,
          enum: ['Point'],
          required: true
        }
    },
    coordinates: {
        type: Array,
        index: '2d'
    },
    culture:String,
    variety:String,
    total_area:Number,
    yield_estimation:Number,
    price:Number

});
const Farm= mongoose.model("Farm",FarmSchema);


module.exports=Farm;