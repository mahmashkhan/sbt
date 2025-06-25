const Packages = require('../../models/packageSchema');

const getPackages = async (req, res) => {

    const getPackage = await Packages.find()
    if (!getPackage) {
        res.status(404).json({ message: "Packages not found" })
    }

    await res.status(200).json(getPackage)
}
const getPackagesByCategory = async (req, res) => {
  try {
    const { slug } = req.params;
    
    const getPackage = await Packages.find({ slug:slug });

    if (!getPackage) {
      return res.status(404).json({ message: "Packages not found" });
    }
    res.status(200).json(getPackage);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};



module.exports = { getPackages, getPackagesByCategory } 