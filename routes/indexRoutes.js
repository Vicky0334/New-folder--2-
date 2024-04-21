const express=require('express');
const router = express.Router();
const User=require("../models/userModel");
const{home,register,readall}=require("../controllers/indexController");

router.get('/',home);
router.post('/register',register); 
router.post('/readall',readall); 
module.exports=router;