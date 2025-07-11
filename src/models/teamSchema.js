const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema({
    name: { type: String, required: true },
    link: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true }
})
module.exports = mongoose.model('Team', teamSchema)