const express = require('express');
const api = express.Router();

const helloWorld = require('../controllers/helloWorld');

api.route('/').get(helloWorld);

module.exports = api;
