const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Camera = new Schema({
  name: { type: String },
  brand: { type: String },
  description: { type: String },
  image: { type: String }
});

module.exports = mongoose.model('Camera', Camera);