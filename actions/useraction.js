"use server"

import User from "@/models/User"
import Payment from "@/models/Payment"
import connectDB from "@/helpers/connectDB"
import { VirtualType } from "mongoose";
import mongooseLeanVirtuals from "mongoose-lean-virtuals";

// const PaymentSchema = new mongoose.Schema({
    // from_user: {
    //     type: String,
    //     required: true
    // },
//     amount: {
//         type: Number,
//         required: true 
//     },
//     paymentId: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     message: {
//         type: String,
//     },
//     status: {
//         type: Boolean,
//         default: false,
//         required: true
//     },
//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//         required: true
//     }
// }, { timestamps: true });

export async function addPayment(data) {
    try {
        await connectDB();
        const { from_user, amount, paymentId, message, username } = data;

        // Find the user by ID
        const user = await User.findOne({username});
        if (!user) {
            throw new Error("User not found");
        }  
        // Create a new payment
        const newPayment = new Payment({
            from_user,
            amount,
            paymentId,
            message,
            user: user._id,
            status: true // Assuming payment is successful
        });
        await newPayment.save();

        return { success: true, payment:JSON.stringify(newPayment) };
    } catch (error) {
        console.error("Error adding payment:", error);
        return { success: false, error: error.message };
    }   
}

export async function getUserPayments(username) {
    try {
        await connectDB();
        const user = await User.findOne({username});
        const payments = await Payment.find({ user: user._id }).sort({ createdAt: -1 }).lean({virtuals:true});
        return { success: true, payments:JSON.stringify(payments)};
    } catch (error) {
        console.error("Error fetching payments:", error);
        return { success: false, error: error.message };
    }
}
