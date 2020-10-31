const express = require('express');
const api = express.Router();

const helloWorld = require('../controllers/v1/helloWorld');
const getAllEpisodes = require('../controllers/v1/getAllEpisodes');
const getAllCharacters = require('../controllers/v1/getAllCharacters');

api.route('/').get(helloWorld);
api.route('/episodes').get(getAllEpisodes);
api.route('/characters').get(getAllCharacters);

module.exports = api;
