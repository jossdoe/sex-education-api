const Episode = require('../../models/Episode');

const getEpisodeById = async (req, res, next) => {
  try {
    const { eid } = req.params;

    if (isNaN(+eid)) {
      return res
        .status(400)
        .json({ error: true, code: 400, message: '400 - Bad Request' });
    }

    const episode = await Episode.findOne({ id: +eid }, { _id: 0 });

    if (episode) return res.status(200).json(episode);
    return res
      .status(404)
      .json({ error: true, code: 404, message: '404 - Not found' });
  } catch (e) {
    next(e);
  }
};

module.exports = getEpisodeById;
