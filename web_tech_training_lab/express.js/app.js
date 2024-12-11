const express = require("express");
const app=express();
const PORT=5000;
//define routes
app.listen(PORT,()=>{
    console.log("listening on port 5000");});

app.get("/",function(req,res){
    res.send("Welcome to first express page");});

app.get("/home",function(req,res){
    res.send("Welcome to home page");});
