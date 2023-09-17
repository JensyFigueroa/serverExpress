const express = require("express");
const server = express();

//Para web static
server.use(express.static(__dirname + "/public"));

server.get("/", (req, res) => {
  res.send("server started");
});

server.get("/service", (req, res) => {
  res.send("Page service");
});

module.exports = server;
