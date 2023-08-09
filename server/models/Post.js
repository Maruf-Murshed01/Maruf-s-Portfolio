const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  frontendGithub:{
    type: String,
    required: true
  },
  backendGithub:{
    type: String,
    required: true
  },
  liveSite: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Post', PostSchema);