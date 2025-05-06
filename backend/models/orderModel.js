import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    orderItems: [{ name: String, price: Number, quantity: Number }],
    amount: Number,
    address: Object,
    status: { type: String,   required: true, default: 'pending' },
    payment: { type: Boolean,   required: true, default: false }
});
export default mongoose.model('Order', orderSchema);
