const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  name: String,
  age: Number,
  gender: String,
  status: String,
  personality: String,
  appearances: [String],
})