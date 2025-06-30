const mongoose = require('mongoose');

const aboutMeSchema = new mongoose.Schema({
    para1: { type: String, require: true },
    para2: {type :String , require:true},
    para3: {type :String , require:true},
})
module.exports = mongoose.model('About', aboutMeSchema)