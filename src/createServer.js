const express = require('express');
const cors = require('cors');

const v1 = require('./api/v1');
const errorHandler = require('./middleware/errorHandler');
const notFound = require('./middleware/notFound');

module.exports = () => {
  const app = express();

  app.use(cors());
  app.use('/v1', v1);
  app.use(notFound);
  app.use(errorHandler);

  return app;
};
