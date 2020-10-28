const express = require('express');
const cors = require('cors');

const v1 = require('./api/v1');
const errorHandler = require('./middleware/errorHandler');

module.exports = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use('/v1', v1);

  app.use(errorHandler);

  return app;
};
