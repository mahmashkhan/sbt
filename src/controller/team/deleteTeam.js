const Team = require('../../models/teamSchema');

const deleteTeam = async (req, res) => {
    const { id } = req.params;
    const deleteMember = await Team.findByIdAndDelete(id)
    try {
        if (!deleteMember) {
            res.status(400).json({ error: 'Failed to delete member' })
        }
        res.status(200).json({ message: 'Success! Member Deleted!' })
    } catch (error) {
        console.error('error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = { deleteTeam };