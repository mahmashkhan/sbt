const Portfolio = require('../../models/portfolioSchema');
const portfolio = async (req, res) => {
    try {
        const { name, description, video } = req.body;

        if (!name || !description || !video) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newPortfolio = new Portfolio({
            name,
            description,
            video
        });

        await newPortfolio.save();

        res.status(201).json({ message: 'Portfolio saved successfully', data: newPortfolio });
    } catch (error) {
        console.error('Error saving Portfolio:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
module.exports = { portfolio
}