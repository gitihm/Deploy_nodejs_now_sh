const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.json({message : "OK"})
});

app.post("/", (req, res) => {
  if(req.body.name === "air"){
    res.json({status : true})
  }else{
    res.json({status : false})
  }
  
});

const server = app.listen(port);