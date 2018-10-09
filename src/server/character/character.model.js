const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const CharacterSchema = new Schema({
  image: String,
  name: String,
  episodes: [String]
});

module.exports = mongoose.model('Character', CharacterSchema);
