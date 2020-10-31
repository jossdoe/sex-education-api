/* eslint-disable indent */
const Character = require('../../models/Character');

const getAllCharacters = async (req, res) => {
  const characters = await Character.find({}, { _id: 0 });

  res.status(200).json(characters);
};

module.exports = getAllCharacters;
