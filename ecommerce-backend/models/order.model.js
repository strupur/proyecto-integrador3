const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    products: [
        {

            product: {
                type: Schema.Types.ObjectId,
                ref: 'Product',
            },
            quantity: Number,
            price: Number,
        }
    ],
    total: Number,
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        default: 'PREPARACION',
        
    },

})

module.exports = mongoose.model("Order", orderSchema);