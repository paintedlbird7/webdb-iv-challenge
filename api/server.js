const express = require('express');
const helmet = require('helmet');

const recipesRouter = require('../recipes/recipes-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/recipes', recipesRouter);

// sanity check route
server.get('/', (req, res) => {
  res.status(200).json({ hello: 'World!' });
});

module.exports = server;