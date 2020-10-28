const express = require('express');
const api = express.Router();

const helloWorld = require('../controllers/v1/helloWorld');

api.route('/').get(helloWorld);

module.exports = api;
