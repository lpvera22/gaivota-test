/* eslint-disable indent */
/*jshint esversion: 8 */
const express=require("express");
const router=express.Router();

const Precip=require("../models/precipitacion");
router.get("/",async(req,res)=>{
    
    const precips=await Precip.find();
    if (precips.length>0){
        res.send(precips);
    }
    res.status(204).send("empty collection");
});

router.post("/",async(req,res)=>{
    let precip=new Precip({
        date:req.body.date,
        fid:req.body.fid,
        cant:req.body.cant
    });
    precip=await precip.save();
    res.json(precip);

});
router.put('/:_id',async(req,res)=>{
    
    const result=await Precip.findByIdAndUpdate(req.params._id,{date:req.body.date,fid:req.body.fid,cant:req.body.cant},{new:true});
    
    
    res.send(result);
    

});
router.delete('/:id',async (req,res)=>{
    const p= await Precip.findByIdAndRemove({_id:req.params.id})
    if (!p) res.status(404).send('Precipitation not found')
    res.send(p);

});
module.exports=router;