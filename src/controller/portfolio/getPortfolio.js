const Portfolio = require('../../models/portfolioSchema');
const getPortfolio = async (req, res) => {
    try {
        const portfolios = await Portfolio.find();
        res.status(200).json(portfolios);
    } catch (error) {
        console.error('Error fetching portfolios:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
const getPortfolioById = async (req, res) => {
    try {
        const { id } = req.params;
        const portfolios = await Portfolio.findById(id);
        res.status(200).json(portfolios);
    } catch (error) {
        console.error('Error fetching portfolios:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
module.exports = { getPortfolio,getPortfolioById };