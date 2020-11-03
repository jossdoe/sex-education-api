const express = require('express');
const api = express.Router();

const helloWorld = require('../controllers/v1/helloWorld');
const getAllEpisodes = require('../controllers/v1/getAllEpisodes');
const getEpisodeById = require('../controllers/v1/getEpisodeById');
const getAllCharacters = require('../controllers/v1/getAllCharacters');
const getCharacterById = require('../controllers/v1/getCharacterById');

api.route('/').get(helloWorld);
api.route('/episodes').get(getAllEpisodes);
api.route('/episodes/:eid').get(getEpisodeById);
api.route('/characters').get(getAllCharacters);
api.route('/characters/:cid').get(getCharacterById);

module.exports = api;
