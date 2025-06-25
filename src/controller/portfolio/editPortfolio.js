const Portfolio = require('../../models/portfolioSchema');

const editPortfolio = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, video } = req.body;

        if (!name || !description || !video) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const updatedPortfolio = await Portfolio.findByIdAndUpdate(
            id,
            { name, description, video },
            { new: true } // return the updated document
        );

        if (!updatedPortfolio) {
            return res.status(404).json({ message: 'Portfolio not found' });
        }

        res.status(200).json({ message: 'Portfolio updated successfully', data: updatedPortfolio });
    } catch (error) {
        console.error('Error updating Portfolio:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { editPortfolio };
 