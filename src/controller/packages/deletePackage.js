const Packages = require('../../models/packageSchema');

const deletePackage = async (req, res) => {
    const { id } = req.params;



    try {
        const packageDelete = await Packages.findByIdAndDelete(
            id,

        );

        if (!packageDelete) {
            return res.status(400).json({ error: 'Unable to delete package' });
        }

        res.status(200).json({ message: "Package deleted successfully!" });

    } catch (error) {
        console.error("delete error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { deletePackage };
