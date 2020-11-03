/* eslint-disable indent */
const Episode = require('../../models/Episode');

const getAllEpisodes = async (req, res) => {
  const episodes = await Episode.find({}, { _id: 0 });
  const sortedEpisodes = [...episodes.sort((a, b) => a.id - b.id)];

  res.status(200).json(sortedEpisodes);
};

module.exports = getAllEpisodes;
