const Highlight = require('../../models/highlightSchema');

const addHighlight = async (req, res) => {
  try {
    const { highlight } = req.body;

    if (!highlight) {
      return res.status(400).json({ message: 'Highlight video URL is required' });
    }

    const updatedHighlight = await Highlight.findOneAndUpdate(
      {},
      { highlight },
      {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true
      }
    );

    res.status(200).json({
      message: 'Highlight video saved successfully',
      data: updatedHighlight
    });
  } catch (error) {
    console.error('Error saving highlight video:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { addHighlight };
