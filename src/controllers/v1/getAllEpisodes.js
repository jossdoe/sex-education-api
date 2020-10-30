/* eslint-disable indent */
const Episode = require('../../models/Episode');

const getAllEpisodes = async (req, res) => {
  const episodes = await Episode.find({}, { _id: 0 });

  const seasonOne = [
    ...episodes
      .filter((ep) => ep.season === '1')
      .sort((a, b) =>
        a.episode[a.episode.length - 1] > b.episode[b.episode.length - 1]
          ? 1
          : b.episode[b.episode.length - 1] > a.episode[a.episode.length - 1]
          ? -1
          : 0
      ),
  ];

  const seasonTwo = [
    ...episodes
      .filter((ep) => ep.season === '2')
      .sort((a, b) =>
        a.episode[a.episode.length - 1] > b.episode[b.episode.length - 1]
          ? 1
          : b.episode[b.episode.length - 1] > a.episode[a.episode.length - 1]
          ? -1
          : 0
      ),
  ];

  res.status(200).json([...seasonOne, ...seasonTwo]);
};

module.exports = getAllEpisodes;
