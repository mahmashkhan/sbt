const Landing = require('../../models/landingImageSchema');
const multer = require('multer');

// Use memory storage
const storage = multer.memoryStorage();
const landingUpload = multer({ storage });

// PUT Controller to overwrite images
const landingImage = async (req, res) => {
  try {
    const images = req.files;

    if (!images || images.length === 0) {
      return res.status(400).json({ message: 'Please upload at least one image.' });
    }

    // Convert each image to base64
    const base64Images = images.map(img =>
      `data:${img.mimetype};base64,${img.buffer.toString("base64")}`
    );

    // Update (or create) the one landing document
    const updatedLanding = await Landing.findOneAndUpdate(
      {},
      { images: base64Images },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    res.status(200).json({
      message: 'Landing images updated successfully',
      data: updatedLanding
    });
  } catch (error) {
    console.error("Error updating landing images:", error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { landingImage, landingUpload };