const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EpisodeSchema = new Schema({
  image: String,
  season: Number,
  number: Number,
  date: Date,
  title: String,
  summary: String
});

module.exports = mongoose.model('Episode', EpisodeSchema);
