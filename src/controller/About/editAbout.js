const About = require('../../models/aboutmeModel');

const editAbout = async (req, res) => {
    try {
        const { id } = req.params;
        const { para1, para2, para3 } = req.body;

        if (!para1 || !para2 || !para3) {
            return res.status(400).json({ message: 'about field is required' });
        }
        const newAbout = await About.findByIdAndUpdate(id, {
            para1: para1,
            para2: para2, 
            para3: para3,
        }, { new: true })

        if (!newAbout) {
            res.status(404).json({ message: 'Failed To find About data' })
        }

        res.status(201).json({ message: 'About me updated successfully', data: newAbout });
    } catch (error) {
        console.error('Error updating About Me:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { editAbout };
