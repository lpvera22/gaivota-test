const mongoose=require('mongoose');

const precipitacionSchema=new mongoose.Schema({
    date:{
        type:Date,
        required:true
    },
    fid:{
        type:Number,
        required:true},
    cant:Number,

});
const Precipitacion=mongoose.model('Precipitacion',precipitacionSchema);

module.exports=Precipitacion;