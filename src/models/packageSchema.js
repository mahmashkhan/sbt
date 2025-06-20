const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        enum: [
            "Restaurant and Cafes",
            "Fashion and Clothing Brands",
            "Event Coverage",
            "Ecommerce/Products Brands"
        ],
    },
    price: { type: Number, required: true },  
    slug: {
        type: String,
        required: true,
        enum: ["food", "fashion", "event", "products"],
    },
    type: { type: String, required: true },
    features: { type: Array, required: true },
});

module.exports = mongoose.model('Packages', packageSchema);
