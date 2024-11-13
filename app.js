const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;

app.use(cors());

app.get("/",(req,res)=>{
    res.json({msg:"hello world"})
    
})
app.listen(port,()=>{
    console.log("server listing")
})