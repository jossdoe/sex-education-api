const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res
    .status(500)
    .json({ error: true, code: 500, message: '500 - Server Error' });
};

module.exports = errorHandler;
