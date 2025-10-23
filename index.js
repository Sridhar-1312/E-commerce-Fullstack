const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const  error  = require("console");


app.use(express.json())
app.use(cors()); 


mongoose.connect("mongodb+srv://Sridharc:007007007@cluster0.nrw42eq.mongodb.net/e-commerce")

//API Creation

app.get("/",(req,res)=>{
    res.send("Express App is Running")
})

//Image storage Engine//

const storage = multer.diskStorage({
    destination: './Upload/Images'
    
})



app.listen(port, (error)=>{
    if(!error){
        console.log("Server is Running on Port" + port);
        
    }else{
        console.log("Error" +error);
        
    }
})
