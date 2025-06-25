const Packages = require('../../models/packageSchema');

const addPackages = async (req, res) => {
    const { category, type,price, features,slug } = req.body;
    if (!category || !type ||!price || !features||!slug) {
        res.status(400).json({ error: 'all fields are mandotary' })
    }
    const newPackage = new Packages({
        category,
        type,
        price,
        slug,
        features
    })
    await newPackage.save()
    res.status(201).json({ message: "Package Added Successfully!", newPackage })
}

module.exports = { addPackages } 