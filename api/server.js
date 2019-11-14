const express = require("express");
const Vikings = require("../vikings/vikings-model.js");
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "Armed" });
});

server.get("/vikings", (req, res) => {
  Vikings.getAll()
    .then(vikings => {
      res.status(200).json(vikings);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;
