const Landing = require('../../models/landingImageSchema');

const getLandingImage = async (req, res) => {
  try {
    // Find the first (and only) landing image document
    const landing = await Landing.findOne();

    if (!landing) {
      return res.status(404).json({ message: 'No landing image found' });
    }

    res.status(200).json({
      message: 'Landing image fetched successfully',
      data: landing
    });

  } catch (error) {
    console.error('Error fetching landing image:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { getLandingImage };
