const notFound = (req, res, next) => {
  res.status(404).json({
    error: true,
    code: 404,
    message: '404 - Not Found',
  });
};

module.exports = notFound;
