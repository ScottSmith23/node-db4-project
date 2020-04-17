const express = require('express');
const helmet = require('helmet');

const recipeRouter = require('../recipebook/recipe-router.js');
const ingredientsRouter = require('../recipebook/ingredients-router.js');
const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/recipes', recipeRouter);
server.use('/api/ingredients', ingredientsRouter);

module.exports = server;
