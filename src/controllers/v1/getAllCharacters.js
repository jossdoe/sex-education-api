const Character = require('../../models/Character');

const getAllCharacters = async (req, res, next) => {
  try {
    const characters = await Character.find({}, { _id: 0 });
    const sortedCharacters = characters.sort((a, b) => a.id - b.id);

    res.status(200).json(sortedCharacters);
  } catch (e) {
    next(e);
  }
};

module.exports = getAllCharacters;
