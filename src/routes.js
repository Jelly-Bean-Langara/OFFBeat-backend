/* Route Module */
const express = require('express');
const routes = express.Router();
const categories = require('./Controllers/categories-controller')

routes.get('/journey/categories', categories.getAll);

module.exports = routes;
