const About = require('../../models/aboutmeModel');

const Aboutme = async (req, res) => {
    try {
        const { para1, para2, para3 } = req.body;

        if (!para1 || !para2 || !para3) {
            return res.status(400).json({ message: 'about field is required' });
        }

        const aboutme = new About({
            para1: para1,
            para2: para2,
            para3: para3,
        });

        await aboutme.save();

        res.status(201).json({ message: 'About me saved successfully', data: aboutme });
    } catch (error) {
        console.error('Error saving About Me:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { Aboutme };
