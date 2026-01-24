const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req,res)=> res.sendFile(__dirname+"/public/login.html"));
app.get("/register", (req,res)=> res.sendFile(__dirname+"/public/register.html"));
app.get("/home", (req,res)=> res.sendFile(__dirname+"/public/index.html"));
app.get("/farmers", (req,res)=> res.sendFile(__dirname+"/public/farmers.html"));
app.get("/crops", (req,res)=> res.sendFile(__dirname+"/public/crops.html"));

const PORT=process.env.PORT ||3000;
app.listen(PORT, ()=> console.log("Server sunning on port"+PORT));