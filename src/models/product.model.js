const mongoose = require("mongoose")

const productSchema = new mongoose.Schema(
    {
        product_name: {
            type: String,
            trim: true,
        },
        product_price: {
            type: Number,
            trim: true,
        },
        product_desc: {
            type: String | Number,
            trim: true
        },
        is_active: {
            type: Boolean,
            default: true,
        },
        category: {
            type: mongoose.Types.ObjectId,
            ref: "category"
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const product = mongoose.model("prodct", productSchema);
module.exports = product;