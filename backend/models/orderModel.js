import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    orderItems: [
        {
            name: String,
            price: Number,
            quantity: Number
        }
    ],
    amount: Number,
    address: {
        street: String,
        city: String,
        zip: String,
        country: String
    },
    status: { type: String, required: true, default: 'pending' },
    payment: { type: Boolean, required: true, default: false }
});
const orderModel = mongoose.models.Order || mongoose.model('Order', orderSchema);

export default orderModel;