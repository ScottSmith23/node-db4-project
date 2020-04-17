const express = require('express');
const helmet = require('helmet');

const recipeRouter = require('../recipebook/recipe-router.js');
// const salesRouter = require('../car/sales-router.js');
const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/recipes', recipeRouter);
// server.use('/api/ingredients', salesRouter);

module.exports = server;
