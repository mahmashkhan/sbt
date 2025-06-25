const Team = require('../../models/teamSchema');

const getTeam = async (req, res) => {
    try {
        const getMembers = await Team.find()
        if (!getMembers) {
            res.status(404).json("No members found")
        }
        res.status(200).json(getMembers)
    }
    catch (error) {
        console.error(error)
    }
}
module.exports = { getTeam }