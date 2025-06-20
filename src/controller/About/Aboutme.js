const About = require('../../models/aboutmeModel');

const Aboutme = async (req, res) => {
    try {
        const about = req.body.about;

        if (!about) {
            return res.status(400).json({ message: 'about field is required' });
        }

        const aboutme = new About({
            about: about
        });

        await aboutme.save();

        res.status(201).json({ message: 'About me saved successfully', data: aboutme });
    } catch (error) {
        console.error('Error saving About Me:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { Aboutme };
