const Episode = require('../../models/Episode');

const getAllEpisodes = async (req, res, next) => {
  try {
    const episodes = await Episode.find({}, { _id: 0 });
    const sortedEpisodes = [...episodes.sort((a, b) => a.id - b.id)];

    res.status(200).json(sortedEpisodes);
  } catch (e) {
    next(e);
  }
};

module.exports = getAllEpisodes;
