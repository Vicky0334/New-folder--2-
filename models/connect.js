 require('dotenv').config({path:'./.env'});
const mongoose=require('mongoose');
exports.mongoconnection=async()=>{
    try{
        await mongoose.connect(process.env.MONGOURL);
        console.log('Connected to MongoDB');
        }
        
    catch(err){
        console.log( err.message);
    }
};
