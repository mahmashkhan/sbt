const Portfolio = require('../../models/portfolioSchema');

const deletetheportfolio = async (req, res) => {
    const { id } = req.params;

    try {
        const portfolioDelete = await Portfolio.findByIdAndDelete(id);

        if (!portfolioDelete) {
            return res.status(404).json({ error: 'Portfolio not found or already deleted' });
        }

        res.status(200).json({ message: 'Success! Portfolio deleted' });
    } catch (error) {
        console.error('Error deleting portfolio:', error); 
        res.status(500).json({ error: 'Server error while deleting portfolio' });
    }
};

module.exports = { deletetheportfolio };
