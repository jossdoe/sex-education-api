const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  name: String,
  age: String,
  gender: String,
  status: String,
  personality: String,
});

module.exports = mongoose.model('Character', CharacterSchema);
