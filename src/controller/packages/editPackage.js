const Packages = require('../../models/packageSchema');

const editPackages = async (req, res) => {
    const { id } = req.params;
    const { category, type, features } = req.body;

    if (!category || !type || !features) {
        return res.status(400).json({ error: 'All fields are mandatory' });
    }

    try {
        const updatedPackage = await Packages.findByIdAndUpdate(
            id,
            { category, type, features },
            { new: true } // returns the updated document
        );

        if (!updatedPackage) {
            return res.status(404).json({ error: 'Package not found' });
        }

        res.status(200).json({ message: "Package updated successfully!", updatedPackage });

    } catch (error) {
        console.error("Update error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { editPackages };
