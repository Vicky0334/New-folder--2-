//setting dotenv file
const dotenv = require('dotenv').config({path:'./.env'});
const express= require('express');
const app = express();
//db connection
require("./models/connect").mongoconnection();
const indexRouter = require('./routes/indexRoutes');

//setting logger
app.use(require('morgan')("tiny"));

//bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended:true}));

//router setup->must be second last in the file


app.use("api/user",indexRouter);
app.all("*",(req,res) => {
    res.status(404).json({ url:req.url, success:false,message:"Page not found"});
});


// creating  server   ---must be at the last line
app.listen(process.env.PORT,()=>{
    console.log(`Server is run ${process.env.PORT}`);
});


module.exports = app;