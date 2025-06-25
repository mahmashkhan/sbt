const mongoose = require('mongoose');

const aboutMeSchema = new mongoose.Schema({
    about: { type: String, require: true }
})
module.exports = mongoose.model('About', aboutMeSchema)