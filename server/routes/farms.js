const express=require("express");
const router=express.Router();

const Farm=require("../models/farm");

router.get("/",async(req,res)=>{
    
    const farms=await Farm.find();
    if (farms.length>0){
        res.send(farms);
    }
    res.status(204).send("empty collection");
});

router.post("/",async(req,res)=>{
    let farm=new Farm({
        farm_id:req.body.id,
        name:req.body.name,
        latitude:req.body.latitude,
        longitude:req.body.longitude,
        culture:req.body.culture,
        variety:req.body.variety,
        total_area:req.body.total_area,
        yield_estimation:req.body.yield_estimation,
        price:req.body.price
    });
    farm=await farm.save();
    res.json(farm);

});
router.put('/:_id',async(req,res)=>{
    
    const result=await Farm.findByIdAndUpdate(req.params._id,{name:req.body.name,culture:req.body.culture,
        variety:req.body.variety,
        total_area:req.body.total_area,
        yield_estimation:req.body.yield_estimation,
        price:req.body.price},{new:true});
    
    
    res.send(result);
    

});
router.delete('/:id',async (req,res)=>{
    const farm= await Farm.findByIdAndRemove({_id:req.params.id})
    if (!farm) res.status(404).send('Farm not found')
    res.send(farm);

})

module.exports=router;