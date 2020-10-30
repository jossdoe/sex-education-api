const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EpisodeSchema = new Schema({
  episode: String,
  name: String,
  synopsis: String,
  airdate: Date,
  season: String,
  characters: [String],
});

module.exports = mongoose.model('Episode', EpisodeSchema);
