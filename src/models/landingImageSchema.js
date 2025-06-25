const mongoose = require('mongoose');

const landingImageSchema = new mongoose.Schema({
  images: {
    type: [String], // Array of base64 image strings
    required: true
  }
});

module.exports = mongoose.model('Landing', landingImageSchema);
