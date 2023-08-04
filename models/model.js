const mongoose = require("mongoose")

const modelSchema = mongoose.Schema(
    {
        video_id: {
            type: String,
            required: true
        },
        thumbnail: {
            type: String,
            required: true
        },

        Product: [{
            product_id: {
                type: String,
                required: true
            },
            product_name: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            product_thumbnail: {
                type: String,
                required: true
            },
        }]
    },
)

const Product = mongoose.model('Product', modelSchema);

module.exports = Product;