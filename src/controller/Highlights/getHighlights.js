const Highlights = require('../../models/highlightSchema')

const getHighlight = async (req,res) => {
    const fetchHighlight = await Highlights.findOne()
    if (!fetchHighlight) {
        res.status(404).json({ error: 'NO Landing Video found :(' })
    }
    else {
        res.status(200).json({ data: fetchHighlight })
    }
}
module.exports = { getHighlight }