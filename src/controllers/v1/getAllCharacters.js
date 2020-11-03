const Character = require('../../models/Character');

const getAllCharacters = async (req, res, next) => {
  try {
    const characters = await Character.find({}, { _id: 0 });

    res.status(200).json(characters);
  } catch (e) {
    next(e);
  }
};

module.exports = getAllCharacters;
