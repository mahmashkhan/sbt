const mongoose = require('mongoose');

const highlightSchema = new mongoose.Schema(
    {

        highlight: { type: Array, require: true },
    }
)
module.exports = mongoose.model('highlights', highlightSchema) 