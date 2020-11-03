const Character = require('../../models/Character');

const getCharacterById = async (req, res, next) => {
  try {
    const { cid } = req.params;

    if (isNaN(+cid)) {
      return res
        .status(400)
        .json({ error: true, code: 400, message: '400 - Bad Request' });
    }

    const character = await Character.findOne({ id: +cid }, { _id: 0 });

    if (character) return res.status(200).json(character);
    return res
      .status(404)
      .json({ error: true, code: 404, message: '404 - Not found' });
  } catch (e) {
    next(e);
  }
};

module.exports = getCharacterById;
