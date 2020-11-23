const getCategories = (req, res, next) => {
  const rootUrl = req.protocol + '://' + req.get('host') + req.originalUrl;

  res.status(200);
  res.json({
    characters: `${rootUrl}/v1/characters`,
    episodes: `${rootUrl}/v1/episodes`,
  });
};

module.exports = getCategories;
