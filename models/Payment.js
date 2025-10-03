import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
    from_user: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true 
    },
    paymentId: {
        type: String,
        required: true,
        unique: true
    },
    message: {
        type: String,
    },
    status: {
        type: Boolean,
        default: true,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

export default mongoose.models.Payment || mongoose.model('Payment', PaymentSchema);