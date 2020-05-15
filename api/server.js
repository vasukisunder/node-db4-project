const express = require('express');
const router = require('./recipeRouter');
const server = express();

server.use(express.json());

server.use("/api/recipes", router);

module.exports = server;

