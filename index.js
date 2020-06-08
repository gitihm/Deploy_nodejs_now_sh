const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.json({stauts : true , payload : {username : "aa" , role  : "admin"}})
});



const server = app.listen(port);