/* eslint-disable indent */
/*jshint esversion: 8 */
const express=require("express");
const router=express.Router();

const NDVI=require("../models/ndvi");
router.get("/",async(req,res)=>{
    
    const ns=await NDVI.find();
    if (ns.length>0){
        res.send(ns);
    }
    res.status(204).send("empty collection");
});

router.post("/",async(req,res)=>{
    let ndvi=new Precip({
        date:req.body.date,
        fid:req.body.fid,
        value:req.body.value
    });
    ndvi=await ndvi.save();
    res.json(ndvi);

});
router.put('/:_id',async(req,res)=>{
    
    const result=await NDVI.findByIdAndUpdate(req.params._id,{date:req.body.date,fid:req.body.fid,value:req.body.value},{new:true});
    
    
    res.send(result);
    

});
router.delete('/:id',async (req,res)=>{
    const n= await NDVI.findByIdAndRemove({_id:req.params.id})
    if (!n) res.status(404).send('Precipitation not found')
    res.send(n);

});
module.exports=router;