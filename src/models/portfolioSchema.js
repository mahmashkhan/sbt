const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema(
    {
        name: { type: String, require: true },
        description: { type: String, require: true },
        video: { type: Array, require: true },
    }
)
module.exports = mongoose.model('portfolio', portfolioSchema)