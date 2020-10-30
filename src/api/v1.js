const express = require('express');
const api = express.Router();

const helloWorld = require('../controllers/v1/helloWorld');
const getAllEpisodes = require('../controllers/v1/getAllEpisodes');

api.route('/').get(helloWorld);
api.route('/episodes').get(getAllEpisodes);

module.exports = api;
