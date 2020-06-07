const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.json({message : "OK"})
});

const server = app.listen(port);