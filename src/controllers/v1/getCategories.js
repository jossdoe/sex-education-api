const getCategories = (req, res) => {
  const rootUrl = req.protocol + '://' + req.get('host') + req.originalUrl;

  res.status(200);
  res.json({
    characters: `${rootUrl}/characters`,
    episodes: `${rootUrl}/episodes`,
  });
};

module.exports = getCategories;
