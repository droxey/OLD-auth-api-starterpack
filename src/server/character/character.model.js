const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// var id = new mongoose.Types.ObjectId();

const CharacterSchema = new Schema({
  image: String,
  name: String,
  episodes: [String]
});

module.exports = mongoose.model("Character", CharacterSchema);
