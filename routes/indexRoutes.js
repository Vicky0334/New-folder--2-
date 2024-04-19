const express=require('express');
const router = express.Router();
const User=require("../models/userModel");

/**
 * @route /api/user/
 * @access public
 * @method get
 */
router.get('/',(req,res,next)=>{
    res.status(202).json({success:true,message:"this is test message"});
   
});
router.post('/register',async(req,res,next)=>{
    try {
        const user =new User(req.body);
         await user.save();
        res.status(201).json({success:true,user});
    } catch (error) {
        res.status(500).json({success:false,error:error.message});
        
    }
}); 
module.exports=router;