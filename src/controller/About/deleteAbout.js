const About = require('../../models/aboutmeModel');

const deleteAbout = async (req, res) => {
    try {
        const id = req.params.id;
        const aboutDelete = await About.findByIdAndDelete(id);

        if (!aboutDelete) {
            return res.status(400).json({ message: 'Failed to delete about data' });
        }

        res.status(200).json({ message: 'Success, About Deleted' });
    } catch (error) {
        console.error('Error deleting about:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { deleteAbout };
  